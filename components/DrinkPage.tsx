
import React, { useState } from 'react';
import { T, DRINK_DATA, MOOD_TRANSLATIONS } from '../constants';

interface DrinkPageProps {
  onBack: () => void;
  lang: string;
}

const DrinkPage: React.FC<DrinkPageProps> = ({ onBack, lang }) => {
  const [mood, setMood] = useState("豪情万丈");
  const [zoom, setZoom] = useState(false);
  const data = DRINK_DATA[mood];

  return (
    <div className="min-h-screen bg-paper-texture font-serif animate-fade-in flex flex-col">
      {zoom && <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center cursor-zoom-out p-6" onClick={() => setZoom(false)}><img src={data.img} className="max-w-full max-h-full rounded shadow-2xl animate-slowZoom" alt="Scene" /></div>}
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur z-20 px-6 py-4 flex justify-between border-b border-gray-200">
        <h2 className="text-xl font-bold">{T['drink.title'][lang as 'zh'|'en']}</h2>
        <button onClick={onBack} className="px-4 border rounded-full hover:bg-gray-50">{T['drink.back'][lang as 'zh'|'en']}</button>
      </div>
      <div className="flex-1 pt-24 pb-12 px-6 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full">
        <div className="w-full md:w-1/3 space-y-3">
          <h3 className="font-bold text-gray-500 mb-4">{T['drink.prompt'][lang as 'zh'|'en']}</h3>
          {Object.keys(DRINK_DATA).map(k => (
            <button key={k} onClick={() => setMood(k)} className={`w-full p-4 rounded-xl border text-left flex justify-between transition-all ${mood === k ? 'bg-gray-900 text-white shadow-lg scale-105' : 'bg-white hover:bg-gray-50'}`}>
              <span className="font-bold">
                {lang === 'zh' ? k : MOOD_TRANSLATIONS[k]}
              </span>
              {mood === k && '🍶'}
            </button>
          ))}
        </div>
        <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
          <div className="h-80 md:h-96 overflow-hidden cursor-zoom-in relative group" onClick={() => setZoom(true)}>
            <img src={data.img} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Mood" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <h2 className="text-white text-4xl font-bold tracking-widest">{lang === 'zh' ? mood : MOOD_TRANSLATIONS[mood]}</h2>
            </div>
          </div>
          <div className="flex-1 p-10 flex flex-col items-center justify-center text-center bg-[#fffdfa]">
            <h3 className="text-3xl font-calligraphy mb-4 leading-relaxed">{data.poem}</h3>
            <p className="text-sm text-gray-400 uppercase tracking-widest mt-4 border-t pt-4">—— {data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkPage;
