
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { RECIPES } from '../constants';

const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [maxTime, setMaxTime] = useState<number | null>(null); // in minutes

  // Helper to parse duration strings like "2h 30m" or "45 min" into minutes
  const parseTimeToMinutes = (timeStr: string): number => {
    let totalMinutes = 0;
    const hoursMatch = timeStr.match(/(\d+)\s*h/);
    const minsMatch = timeStr.match(/(\d+)\s*min/);
    
    if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60;
    if (minsMatch) totalMinutes += parseInt(minsMatch[1]);
    
    return totalMinutes;
  };

  // Get unique tags from all recipes
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    RECIPES.forEach(r => r.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const filteredRecipes = useMemo(() => {
    return RECIPES.filter(recipe => {
      const matchesSearch = 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = !selectedTag || recipe.tags.includes(selectedTag);
      
      const recipeMinutes = parseTimeToMinutes(recipe.time);
      const matchesTime = !maxTime || recipeMinutes <= maxTime;

      return matchesSearch && matchesTag && matchesTime;
    });
  }, [searchTerm, selectedTag, maxTime]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/home')} className="size-10 rounded-full border-2 border-primary bg-cover bg-center overflow-hidden">
               <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCth_pugJGhwxpO56uw28WqRahiXIS5rLkvwxpCCoJzY3jIiuX3uEElmNyv0_k2QgINs8-60VHj-TFzAnIgpWBU90gjRfeJ8abImMBNGR0LVbTlrGT6i59qzOXLNYUXAh7Qkob93lz2FWUy7tJ90Tek_w3oakLB_ZGHICPdSQwma4mkMAlYcnbcirAfHuFWi5_j6pUevN5ihSUeXEKSg2QuM4W0LWwvqy1SUAh-UqwUr8eDBD7SugOUyW5Pal4MeVtVvSdydqCPhCmC")'}}></div>
            </button>
            <div>
              <p className="text-xs text-text-secondary font-medium">Bonjour, Awa 👋</p>
              <h1 className="text-lg font-bold leading-tight">Catalogue</h1>
            </div>
          </div>
          <button className="size-10 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full drop-shadow-sm mb-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-text-secondary">search</span>
          </div>
          <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border-none focus:ring-2 focus:ring-primary shadow-sm text-base dark:text-white" 
            placeholder="Rechercher une recette..." 
            type="text"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Tags Filter */}
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2 px-1">Catégories & Tags</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => setSelectedTag(null)}
              className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full font-semibold text-xs transition-colors ${!selectedTag ? 'bg-primary text-background-dark' : 'bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-text-secondary'}`}
            >
              Tout
            </button>
            {allTags.map(tag => (
              <button 
                key={tag} 
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${selectedTag === tag ? 'bg-primary text-background-dark font-bold' : 'bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-text-secondary'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-2 px-1">Temps de préparation</p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => setMaxTime(null)}
              className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full text-xs font-medium transition-colors ${maxTime === null ? 'bg-primary text-background-dark font-bold' : 'bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-text-secondary'}`}
            >
              Toute durée
            </button>
            {[
              { label: '< 30 min', val: 30 },
              { label: '< 1 h', val: 60 },
              { label: '< 2 h', val: 120 },
            ].map(t => (
              <button 
                key={t.val} 
                onClick={() => setMaxTime(t.val === maxTime ? null : t.val)}
                className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${maxTime === t.val ? 'bg-primary text-background-dark font-bold' : 'bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-text-secondary'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid Results */}
      <main className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">
            {filteredRecipes.length} résultat{filteredRecipes.length > 1 ? 's' : ''}
          </h2>
          {(searchTerm || selectedTag || maxTime) && (
            <button 
              onClick={() => { setSearchTerm(''); setSelectedTag(null); setMaxTime(null); }}
              className="text-xs font-bold text-primary underline underline-offset-4"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredRecipes.map(recipe => (
              <article 
                key={recipe.id} 
                className="flex flex-col gap-2 group cursor-pointer" 
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url("${recipe.image}")`}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <button className="absolute top-2 right-2 size-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors group/btn">
                    <span className="material-symbols-outlined text-white text-[18px] group-hover/btn:text-red-500">favorite</span>
                  </button>
                  <div className="absolute bottom-2 left-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-background-dark">
                      {recipe.tags[0] || 'Sénégal'}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-text-main dark:text-white text-base font-bold leading-tight group-hover:text-primary transition-colors line-clamp-1">{recipe.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-text-secondary text-[10px]">
                      <span className="material-symbols-outlined text-primary text-[14px]">schedule</span>
                      <span>{recipe.time}</span>
                    </div>
                    <span className="text-text-secondary text-[10px]">•</span>
                    <span className="text-text-secondary text-[10px] font-bold uppercase">{recipe.difficulty}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">search_off</span>
            <p className="text-text-muted font-medium">Aucune recette ne correspond à vos critères.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedTag(null); setMaxTime(null); }}
              className="mt-4 px-6 py-2 bg-primary text-background-dark font-bold rounded-lg text-sm"
            >
              Voir tout le catalogue
            </button>
          </div>
        )}
      </main>

      <BottomNav active="catalog" />
    </div>
  );
};

export default Catalog;
