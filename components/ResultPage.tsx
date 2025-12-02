
import React from 'react';
import { T } from '../constants';

interface ResultPageProps {
  type: string;
  data: string;
  onBack: () => void;
  lang: string;
}

const ResultPage: React.FC<ResultPageProps> = ({ type, data, onBack, lang }) => {
  if (type === 'three_ages') {
    let parts = data.split('|||');
    if (parts.length < 3) {
      const fallbackText = "（...）";
      parts = [data, fallbackText, fallbackText];
    }
    const cards = [
      { title: lang === 'zh' ? "青年期" : "Youth", age: lang === 'zh' ? "二十岁 · 仗剑去国" : "Age 20 · Wandering", text: parts[0], theme: "text-teal-800", bg: "bg-teal-50/80", border: "border-teal-800", char: "狂", delay: "0s" },
      { title: lang === 'zh' ? "中年期" : "Mid-Age", age: lang === 'zh' ? "四十岁 · 供奉翰林" : "Age 40 · Imperial Scholar", text: parts[1], theme: "text-amber-800", bg: "bg-amber-50/80", border: "border-amber-800", char: "傲", delay: "0.2s" },
      { title: lang === 'zh' ? "老年期" : "Old Age", age: lang === 'zh' ? "六十岁 · 临终绝笔" : "Age 60 · Final Verse", text: parts[2], theme: "text-slate-800", bg: "bg-slate-50/80", border: "border-slate-800", char: "仙", delay: "0.4s" }
    ];
    return (
      <div className="min-h-screen bg-paper-texture py-12 px-4 md:px-8 relative overflow-hidden font-serif">
        <div className="max-w-7xl mx-auto mb-16 flex justify-between items-center relative z-10 animate-fade-up">
          <div>
            <div className="text-sm text-gray-500 mb-2 uppercase tracking-widest font-sans">Time Travel Q&A</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{lang === 'zh' ? "三时期的回应" : "Response from Three Ages"}</h2>
          </div>
          <button onClick={onBack} className="group px-6 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-2">
            <span className="text-gray-500 group-hover:text-gray-900">✕</span>
            <span className="font-sans text-sm text-gray-600 group-hover:text-gray-900">{T['drink.back'][lang as 'zh'|'en']}</span>
          </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pb-20">
          {cards.map((card, index) => (
            <div key={index} className={`relative group ink-shadow rounded-xl overflow-hidden animate-fade-up`} style={{ animationDelay: card.delay }}>
              <div className={`absolute -right-4 -bottom-8 text-[10rem] font-calligraphy opacity-5 select-none transition-transform group-hover:scale-110 duration-700 ${card.theme}`}>{card.char}</div>
              <div className={`h-full flex flex-col ${card.bg} border-t-4 ${card.border} p-8 transition-colors duration-500`}>
                <div className="border-b border-gray-200/50 pb-6 mb-6 flex justify-between items-start"><div className="writing-vertical h-24 text-2xl font-bold font-calligraphy tracking-widest opacity-80">{card.title}</div><div className="text-right"><div className="text-xs uppercase tracking-widest opacity-50 font-sans mb-1">Age Period</div><div className="text-sm font-bold opacity-80">{card.age}</div></div></div>
                <div className="flex-1"><p className="text-lg leading-loose text-gray-800 text-justify relative"><span className="text-4xl float-left mr-2 mt-[-10px] font-calligraphy opacity-30">“</span>{card.text}</p></div>
                <div className="mt-8 pt-4 border-t border-gray-200/30 flex items-center justify-between opacity-40 text-xs"><span>Tang Dynasty</span><div className="h-px w-12 bg-current"></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-paper-texture flex items-center justify-center p-4 font-serif">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-3xl w-full relative border border-gray-100 animate-fade-up">
        <button onClick={onBack} className="absolute top-6 right-6 text-gray-400 hover:text-black">✕</button>
        <div className="flex gap-4 mb-6 border-b pb-4"><div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"><img src="https://picx.zhimg.com/80/v2-7228406e00cce3ede863a49268a98993_720w.webp?source=2c26e567" className="w-full h-full object-cover" alt="Li Bai" /></div><div><h2 className="text-xl font-bold">{T['search.btn'][lang as 'zh'|'en']}</h2><p className="text-xs text-gray-500">AI Assistant</p></div></div>
        <div className="prose max-w-none leading-loose whitespace-pre-wrap text-gray-700">{data}</div>
      </div>
    </div>
  );
};

export default ResultPage;
