
import React, { useState } from 'react';
import { T, TEAM_MEMBERS, RESEARCH_OVERVIEW, RESEARCH_RESULTS, DATA_SOURCES } from '../constants';

interface AboutPageProps {
  onBack: () => void;
  lang: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, lang }) => {
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const getAvatarSrc = (member: any, index: number) => {
    if (imgError[index]) {
      return `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(member.name.en)}`;
    }
    return member.avatar;
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans animate-fade-in flex flex-col text-gray-900">
      <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold tracking-wider">{T['about.title'][lang as 'zh'|'en']}</h2>
        <button onClick={onBack} className="px-5 py-2 rounded-full bg-gray-100 border border-gray-300 text-sm hover:bg-gray-200 transition-colors font-medium">
          ✕ {T['drink.back'][lang as 'zh'|'en']}
        </button>
      </div>

      <div className="flex-1 pt-24 pb-20 px-6 overflow-y-auto custom-scrollbar">
        <div className="max-w-6xl mx-auto space-y-20">
          
          <section className="animate-fade-up">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-2">{T['about.team'][lang as 'zh'|'en']}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="flex flex-col text-left group">
                  <div className="w-full aspect-square mb-4 overflow-hidden rounded-md bg-gray-100 relative">
                    <img 
                      src={getAvatarSrc(member, index)}
                      alt={lang === 'zh' ? member.name.zh : member.name.en}
                      onError={() => setImgError(prev => ({...prev, [index]: true}))}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.objectPosition || 'top' }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-blue-600 mb-1">{lang === 'zh' ? member.name.zh : member.name.en}</h4>
                  <p className="text-sm text-gray-800 mb-3 leading-tight font-medium">{lang === 'zh' ? member.title.zh : member.title.en}</p>
                  
                  <div className="text-xs text-gray-500 space-y-2 font-mono">
                    <a href={`mailto:${member.email}`} className="block break-all hover:text-gray-800 cursor-pointer transition-colors flex items-center gap-1">
                        ✉️ {member.email}
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block break-all hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-1">
                        🔗 {member.linkedin.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col gap-8">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 w-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{T['about.research'][lang as 'zh'|'en']}</h3>
                <p className="leading-loose text-lg text-gray-700 text-justify">
                  {lang === 'zh' ? RESEARCH_OVERVIEW.zh : RESEARCH_OVERVIEW.en}
                </p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 w-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{T['about.results'][lang as 'zh'|'en']}</h3>
                <p className="leading-loose text-lg text-gray-700 text-justify">
                  {lang === 'zh' ? RESEARCH_RESULTS.zh : RESEARCH_RESULTS.en}
                </p>
              </div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 w-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{T['about.sources'][lang as 'zh'|'en']}</h3>
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                  <p className="leading-loose text-lg text-gray-700 text-justify whitespace-pre-line break-words">
                    {lang === 'zh' ? DATA_SOURCES.zh : DATA_SOURCES.en}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-2">{T['about.data'][lang as 'zh'|'en']}</h3>
              <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <a href="https://github.com/1849083010n-cell/libaifinal.github.io" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800 hover:scale-105 shadow-xl">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {T['about.download_btn'][lang as 'zh'|'en']}
              </a>
            </div>
            <div className="text-center mt-4 text-gray-500 text-sm">
              v1.0.0 • JSON Format • CC BY-NC-SA 4.0
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;