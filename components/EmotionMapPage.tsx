
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { T, EMOTION_MAP_DATA, POEM_DATABASE, ANALYTICS_DATA_FULL, PERIODS } from '../constants';
import { generateResponse } from '../services/geminiService';

interface EmotionMapPageProps {
  viewType: string;
  onBack: () => void;
  lang: string;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only render label if the slice is big enough to hold text roughly
  if (percent < 0.05) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-[10px] md:text-xs font-bold font-serif pointer-events-none">
      {name}
    </text>
  );
};

const EmotionMapPage: React.FC<EmotionMapPageProps> = ({ viewType, onBack, lang }) => {
  const [activeEmotion, setActiveEmotion] = useState('joy');
  const [activePeriod, setActivePeriod] = useState('all');
  const mapInstanceRef = useRef<any>(null);
  const heatLayerRef = useRef<any>(null);

  const [sY, setSY] = useState('');
  const [sL, setSL] = useState('');
  const [sM, setSM] = useState('');
  const [sT, setST] = useState('');
  const [aiRes, setAiRes] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  const listYears = useMemo(() => [...new Set(POEM_DATABASE.map(i => i.y))].sort(), []);
  const listLocs = useMemo(() => sY ? [...new Set(POEM_DATABASE.filter(i => i.y === Number(sY)).map(i => i.l))] : [], [sY]);
  const listMoods = useMemo(() => sL ? [...new Set(POEM_DATABASE.filter(i => i.y === Number(sY) && i.l === sL).map(i => i.m))] : [], [sY, sL]);
  const listTitles = useMemo(() => sM ? [...new Set(POEM_DATABASE.filter(i => i.y === Number(sY) && i.l === sL && i.m === sM).map(i => i.t))] : [], [sY, sL, sM]);

  const handleAnalyze = async () => {
    setAiLoading(true);
    const res = await generateResponse('analysis', { y: sY, l: sL, m: sM, t: sT }, lang);
    setAiRes(res);
    setAiLoading(false);
  };

  useEffect(() => {
    if (viewType !== 'map') return;
    const timer = setTimeout(() => {
      if (!mapInstanceRef.current && window.L && document.getElementById('em-map')) {
        const m = window.L.map('em-map', { center: [33.0, 110.0], zoom: 5, zoomControl: false, attributionControl: false });
        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(m);
        mapInstanceRef.current = m;
      }
      if (mapInstanceRef.current) {
        const m = mapInstanceRef.current;
        if (heatLayerRef.current) heatLayerRef.current.remove();
        const category = EMOTION_MAP_DATA[activeEmotion];
        const pts = category.points.filter(p => activePeriod === 'all' || p.period === activePeriod).map(p => [p.lat, p.lng, p.intensity]);

        let gradient: any = { 0.3: 'blue', 0.5: 'lime', 0.7: 'yellow', 1.0: 'red' };
        if (category.color === 'orange') gradient = { 0.2: '#fbbf24', 0.6: '#f59e0b', 1: '#b45309' };
        if (category.color === 'red') gradient = { 0.2: '#f87171', 0.6: '#dc2626', 1: '#991b1b' };
        if (category.color === 'grey') gradient = { 0.2: '#9ca3af', 0.6: '#4b5563', 1: '#111827' };
        if (category.color === 'purple') gradient = { 0.2: '#a78bfa', 0.6: '#7c3aed', 1: '#4c1d95' };
        if (category.color === 'green') gradient = { 0.2: '#34d399', 0.6: '#059669', 1: '#064e3b' };

        if (window.L.heatLayer) heatLayerRef.current = window.L.heatLayer(pts, { radius: 50, blur: 30, max: 2.0, minOpacity: 0.65, gradient }).addTo(m);
      }
    }, 50);
    return () => { clearTimeout(timer); if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; } };
  }, [viewType, activeEmotion, activePeriod]);

  const totalAnalyticsValue = ANALYTICS_DATA_FULL.reduce((a, b) => a + b.value, 0);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      <div className="absolute top-0 left-0 right-0 z-[1000] pointer-events-none flex flex-col md:flex-row justify-between p-4 md:p-6 gap-4">
        {viewType === 'map' ? (
          <div className="pointer-events-auto bg-white/95 backdrop-blur shadow-xl rounded-2xl p-5 border border-gray-200 max-w-md w-full flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-serif">{T['emotion.title'][lang as 'zh'|'en']}</h2>
              <p className="text-xs text-gray-500 mt-1">{T['emotion.subtitle'][lang as 'zh'|'en']}</p>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">{T['emotion.period'][lang as 'zh'|'en']}</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {PERIODS.map(p => (
                  <button key={p.id} onClick={() => setActivePeriod(p.id)} className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${activePeriod === p.id ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>{p.label[lang as 'zh'|'en']}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">{T['emotion.core'][lang as 'zh'|'en']}</label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(EMOTION_MAP_DATA).map(([key, { label, enLabel, color }]) => (
                  <button key={key} onClick={() => setActiveEmotion(key)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all border ${activeEmotion === key ? 'bg-gray-800 text-white border-gray-800 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
                    <span className="w-3 h-3 rounded-full shadow-sm border border-white/20" style={{ backgroundColor: color === 'grey' ? '#374151' : color }}></span>
                    {lang === 'zh' ? label : enLabel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : <div></div>}
        <button onClick={onBack} className="pointer-events-auto h-10 px-4 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium">✕ {T['emotion.exit'][lang as 'zh'|'en']}</button>
      </div>

      {viewType === 'map' && <div id="em-map" className="w-full h-full relative z-0 bg-stone-50"></div>}

      {viewType === 'stats' && (
        <div className="flex-1 relative bg-stone-50 overflow-y-auto custom-scrollbar pt-20 px-6 pb-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-8"><h2 className="text-3xl font-bold font-serif text-gray-800">{T['emotion.stats_title'][lang as 'zh'|'en']}</h2></div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col items-center justify-between">
                <h3 className="text-lg font-bold mb-6 text-gray-800 w-full text-left border-l-4 border-blue-800 pl-3">{T['emotion.fav_words'][lang as 'zh'|'en']}</h3>
                <div className="w-full h-72 relative flex justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={ANALYTICS_DATA_FULL}
                        dataKey="value"
                        nameKey={lang === 'zh' ? 'name' : 'enName'}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={105}
                        paddingAngle={1}
                        labelLine={false}
                        label={renderCustomizedLabel}
                      >
                        {ANALYTICS_DATA_FULL.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full mt-6 flex h-5 rounded-full overflow-hidden">
                  {ANALYTICS_DATA_FULL.map((item, i) => {
                    const percent = Math.round((item.value / totalAnalyticsValue) * 100);
                    return (
                      <div key={i} className="h-full flex items-center justify-center text-[10px] text-white/90 font-bold" style={{ width: `${percent}%`, background: item.color }} title={`${lang === 'zh' ? item.name : item.enName} ${percent}%`}>
                        {percent > 5 ? `${percent}%` : ''}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col">
                <h3 className="text-lg font-bold mb-6 text-gray-800 border-l-4 border-blue-800 pl-3">{T['emotion.dist'][lang as 'zh'|'en']}</h3>
                <div className="space-y-5 flex-1">
                  {ANALYTICS_DATA_FULL.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between text-sm mb-2 font-bold text-gray-700">
                        <span>{lang === 'zh' ? item.name : item.enName}</span>
                        <span>{lang === 'zh' ? item.emotion : item.enEmotion}</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden relative" title={`${item.value} (${Math.round((item.value / totalAnalyticsValue) * 100)}%)`}>
                        <div className="h-full rounded-full transition-all duration-700 hover:opacity-80 cursor-help" style={{ width: `${(item.value / 40) * 100}%`, backgroundColor: item.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-8">
              <div className="flex items-center gap-2 mb-6 border-b pb-4"><span className="text-2xl">🧠</span><h3 className="font-bold text-gray-800">{T['emotion.ai_title'][lang as 'zh'|'en']}</h3></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <select className="p-3 rounded-xl border" value={sY} onChange={e => setSY(e.target.value)}><option value="">{T['emotion.select_year'][lang as 'zh'|'en']}</option>{listYears.map(y => <option key={y} value={y}>{y}</option>)}</select>
                <select className="p-3 rounded-xl border" value={sL} onChange={e => setSL(e.target.value)} disabled={!sY}><option value="">{T['emotion.select_loc'][lang as 'zh'|'en']}</option>{listLocs.map(l => <option key={l} value={l}>{l}</option>)}</select>
                <select className="p-3 rounded-xl border" value={sM} onChange={e => setSM(e.target.value)} disabled={!sL}><option value="">{T['emotion.select_mood'][lang as 'zh'|'en']}</option>{listMoods.map(m => <option key={m} value={m}>{m}</option>)}</select>
                <select className="p-3 rounded-xl border" value={sT} onChange={e => setST(e.target.value)} disabled={!sM}><option value="">{T['emotion.select_poem'][lang as 'zh'|'en']}</option>{listTitles.map(t => <option key={t} value={t}>{t}</option>)}</select>
              </div>
              <button onClick={handleAnalyze} disabled={!sT || aiLoading} className="w-full py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50">{aiLoading ? T['emotion.analyzing'][lang as 'zh'|'en'] : T['emotion.btn_analyze'][lang as 'zh'|'en']}</button>
              {aiRes && <div className="mt-8 p-8 bg-[#fdfbf7] rounded-xl border border-stone-200 whitespace-pre-wrap leading-loose font-serif">{aiRes}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionMapPage;
