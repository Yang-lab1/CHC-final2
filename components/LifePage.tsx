
import React from 'react';
import { T, LIFE_EVENTS } from '../constants';

interface LifePageProps {
  onBack: () => void;
  lang: string;
}

const LifePage: React.FC<LifePageProps> = ({ onBack, lang }) => {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-800 font-serif animate-fade-in">
      <div className="fixed top-0 left-0 w-full bg-stone-50/90 backdrop-blur-md border-b border-stone-200 z-20 px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-widest">{T['life.title'][lang as 'zh'|'en']}</h2>
        <button onClick={onBack} className="px-4 py-2 rounded-full bg-white border border-gray-300 text-sm hover:bg-gray-100 transition-colors">✕ {T['life.back'][lang as 'zh'|'en']}</button>
      </div>
      <div className="max-w-4xl mx-auto pt-24 pb-20 px-6">
        <div className="relative border-l-2 border-stone-300 ml-6 md:ml-12 space-y-16">
          {LIFE_EVENTS.map((e, i) => (
            <div key={i} className="relative pl-8 md:pl-16 group">
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-stone-100 border-4 border-gray-400 group-hover:border-blue-600 group-hover:scale-125 transition-all duration-300"></div>
              <div className="absolute -left-16 md:-left-24 top-0 text-right w-12 md:w-20">
                <span className="text-lg md:text-xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors font-sans">{e.y}</span>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{lang === 'zh' ? e.t.zh : e.t.en}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{lang === 'zh' ? e.d.zh : e.d.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifePage;
