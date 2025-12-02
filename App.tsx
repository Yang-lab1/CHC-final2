
import React, { useState, useRef, useEffect } from 'react';
import { T, TYPEWRITER_PHRASES } from './constants';
import SearchSection from './components/SearchSection';
import EmotionMapPage from './components/EmotionMapPage';
import LifePage from './components/LifePage';
import DrinkPage from './components/DrinkPage';
import FootprintPage from './components/FootprintPage';
import NetworkPage from './components/NetworkPage';
import AboutPage from './components/AboutPage';
import ResultPage from './components/ResultPage';
import { generateResponse } from './services/geminiService';

const Typewriter = ({ lang }: { lang: string }) => {
  const phrases = TYPEWRITER_PHRASES[lang];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    setIndex(0);
    setSubIndex(0);
    setReverse(false);
  }, [lang]);

  useEffect(() => {
    if (index >= phrases.length) { setIndex(0); return; }
    const currentPhrase = phrases[index];
    let timeoutValue = 150;
    if (reverse) timeoutValue = 50;
    if (!reverse && subIndex === currentPhrase.length) timeoutValue = 2000;
    if (reverse && subIndex === 0) timeoutValue = 500;
    
    const timer = setTimeout(() => {
      if (!reverse && subIndex === currentPhrase.length) { setReverse(true); return; }
      if (reverse && subIndex === 0) { setReverse(false); setIndex((prev) => (prev + 1) % phrases.length); return; }
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, timeoutValue);
    return () => clearTimeout(timer);
  }, [subIndex, index, reverse, phrases]);

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-gray-900 mb-2">
        {T['home.hero.title'][lang as 'zh'|'en']}
      </h1>
      <div className="text-5xl md:text-7xl font-bold tracking-tight leading-tight min-h-[1.2em]">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text animate-gradient-x">
          {phrases[index].substring(0, subIndex)}
        </span>
        <span className="ml-1 inline-block w-1 h-12 md:h-16 bg-gray-800 animate-blink align-middle mb-2"></span>
      </div>
    </div>
  );
};

const App = () => {
  const [view, setView] = useState('home');
  const [emotionSubView, setEmotionSubView] = useState('map');
  const [searchRes, setSearchRes] = useState({ type: '', data: '' });
  const [loading, setLoading] = useState(false);
  const [emoMenuOpen, setEmoMenuOpen] = useState(false);
  const menuTimeoutRef = useRef<any>(null);

  const [lang, setLang] = useState('zh');

  const handleMenuEnter = () => { if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current); setEmoMenuOpen(true); };
  const handleMenuLeave = () => { menuTimeoutRef.current = setTimeout(() => setEmoMenuOpen(false), 200); };
  const toggleLang = () => { setLang(prev => prev === 'zh' ? 'en' : 'zh'); };

  const goSearch = async (q: string, type: string) => {
    setLoading(true);
    const res = await generateResponse(type, { query: q }, lang);
    setSearchRes({ type, data: res });
    setLoading(false);
    setView('result');
  };

  const handleEmotionClick = (type: string) => {
    setEmotionSubView(type);
    setView('emotion');
    setEmoMenuOpen(false);
  };

  // Render Sub-pages directly to avoid stacking headers
  if (view === 'emotion') return <EmotionMapPage viewType={emotionSubView} onBack={() => setView('home')} lang={lang} />;
  if (view === 'result') return <ResultPage type={searchRes.type} data={searchRes.data} onBack={() => setView('home')} lang={lang} />;
  if (view === 'life') return <LifePage onBack={() => setView('home')} lang={lang} />;
  if (view === 'drink') return <DrinkPage onBack={() => setView('home')} lang={lang} />;
  if (view === 'footprint') return <FootprintPage onBack={() => setView('home')} lang={lang} />;
  if (view === 'network') return <NetworkPage onBack={() => setView('home')} lang={lang} />;
  if (view === 'about') return <AboutPage onBack={() => setView('home')} lang={lang} />;

  // Home Page Layout
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col relative overflow-hidden">
      <header className="px-8 py-8 md:px-16 md:py-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full z-20">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="text-2xl font-bold tracking-widest cursor-pointer text-gray-900" onClick={() => setView('home')}>
            {T['app.title'][lang as 'zh'|'en']}
          </div>
          <button 
            onClick={toggleLang}
            className="text-xs font-bold border border-gray-300 rounded px-2 py-1 hover:bg-gray-200 transition-colors uppercase"
          >
            {T['nav.lang'][lang as 'zh'|'en']}
          </button>
        </div>

        <nav className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setView('life')} className="group px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg leading-none group-hover:scale-110 transition-transform flex items-center">📜</span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">{T['nav.life'][lang as 'zh'|'en']}</span>
          </button>

          <div className="relative group" onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
            <button className="group px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 flex items-center gap-2">
              <span className="text-lg leading-none group-hover:scale-110 transition-transform flex items-center">📊</span>
              <span className="text-sm font-medium text-gray-600 group-hover:text-red-600">{T['nav.emotion'][lang as 'zh'|'en']}</span>
            </button>
            {emoMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 overflow-hidden animate-fade-up">
                <button onClick={() => handleEmotionClick('map')} className="w-full text-left px-4 py-3 text-sm hover:bg-red-50 hover:text-red-600 font-medium">
                  {lang === 'zh' ? '地理热力图' : 'Geo Heatmap'}
                </button>
                <button onClick={() => handleEmotionClick('stats')} className="w-full text-left px-4 py-3 text-sm hover:bg-red-50 hover:text-red-600 font-medium">
                  {lang === 'zh' ? '意象与AI赏析' : 'Imagery & AI'}
                </button>
              </div>
            )}
          </div>

          <button onClick={() => setView('network')} className="group px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg leading-none group-hover:scale-110 transition-transform flex items-center">🔗</span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-cyan-600">{T['nav.network'][lang as 'zh'|'en']}</span>
          </button>

          <button onClick={() => setView('footprint')} className="group px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg leading-none group-hover:scale-110 transition-transform flex items-center">🌏</span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-600">{T['nav.footprint'][lang as 'zh'|'en']}</span>
          </button>
          <button onClick={() => setView('drink')} className="group px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-400 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg leading-none group-hover:scale-110 transition-transform flex items-center">🥂</span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-purple-600">{T['nav.drink'][lang as 'zh'|'en']}</span>
          </button>
          <button onClick={() => setView('about')} className="group px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-500 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg leading-none group-hover:scale-110 transition-transform flex items-center">👥</span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{T['nav.about'][lang as 'zh'|'en']}</span>
          </button>
        </nav>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl w-full">
          <div className="w-full lg:w-3/5 space-y-8 z-10">
            <Typewriter lang={lang} />
            <div className="max-w-lg">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif whitespace-pre-wrap">
                {T['home.desc'][lang as 'zh'|'en']}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gray-100 rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white relative bg-gray-200 flex items-center justify-center group">
                <img src="https://picx.zhimg.com/80/v2-7228406e00cce3ede863a49268a98993_720w.webp?source=2c26e567" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-in-out" alt="Li Bai Portrait" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full flex flex-col items-center">
          <SearchSection onSearch={goSearch} loading={loading} lang={lang} />
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm font-serif">
        {T['footer.text'][lang as 'zh'|'en']}
      </footer>
    </div>
  );
};

export default App;
