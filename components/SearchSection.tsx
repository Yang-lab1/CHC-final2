import React, { useState, useRef, useEffect } from 'react';
import { T } from '../constants';

interface SearchSectionProps {
  onSearch: (query: string, mode: string) => void;
  loading: boolean;
  lang: string;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, loading, lang }) => {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('general');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query, mode);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 relative z-50 flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative flex items-center bg-white rounded-3xl leading-none shadow-sm h-16">
          <div className="relative h-full flex items-center border-r border-gray-100" ref={dropdownRef}>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex items-center gap-2 px-5 h-full text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap bg-gray-50 hover:bg-gray-100 rounded-l-3xl min-w-[120px] justify-between">
              {mode === 'general' ? T['search.btn'][lang as 'zh'|'en'] : T['search.btn_alt'][lang as 'zh'|'en']}
              <span className="text-xs opacity-50">▼</span>
            </button>
            {menuOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 overflow-hidden animate-fade-up">
                <button type="button" onClick={() => { setMode('general'); setMenuOpen(false); }} className="w-full text-left px-4 py-3 text-sm hover:bg-blue-50">{T['search.btn'][lang as 'zh'|'en']}</button>
                <button type="button" onClick={() => { setMode('three_ages'); setMenuOpen(false); }} className="w-full text-left px-4 py-3 text-sm hover:bg-purple-50">{T['search.btn_alt'][lang as 'zh'|'en']}</button>
              </div>
            )}
          </div>
          <input 
            type="text" 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            placeholder={T['search.placeholder'][lang as 'zh'|'en']} 
            className="flex-1 h-full py-2 px-4 text-gray-900 bg-transparent border-0 ring-0 outline-none focus:ring-0 text-lg font-serif placeholder-gray-400" 
          />
          <button type="submit" disabled={loading} className="px-6 h-full text-blue-600 hover:text-blue-800 transition-colors rounded-r-3xl hover:bg-blue-50 flex items-center justify-center">
            {loading ? <span className="animate-spin">⌛</span> : <span className="text-xl">➤</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;