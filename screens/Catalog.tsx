import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { RECIPES } from '../constants';

const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [maxTime, setMaxTime] = useState<number | null>(null);

  const parseTimeToMinutes = (timeStr: string): number => {
    let totalMinutes = 0;
    const hoursMatch = timeStr.match(/(\d+)\s*h/);
    const minsMatch = timeStr.match(/(\d+)\s*min/);
    if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60;
    if (minsMatch) totalMinutes += parseInt(minsMatch[1]);
    return totalMinutes;
  };

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
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24 relative overflow-hidden">
      {/* Fond wax light subtil et professionnel (proposition 3 choisie) */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none bg-cover bg-repeat"
        style={{
          backgroundImage: 'url("https://www.shutterstock.com/image-vector/light-ethnic-pattern-green-yellow-260nw-2418077485.jpg")',
        }}
      ></div>

      {/* Header premium avec ton nom */}
      <header className="sticky top-0 z-20 bg-gradient-to-b from-green-50/50 via-yellow-50/30 to-red-50/50 dark:from-green-900/20 dark:via-yellow-900/10 dark:to-red-900/20 backdrop-blur-md shadow-xl px-5 pt-8 pb-6 border-b border-primary/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-5">
            <button onClick={() => navigate('/home')} className="relative">
              <div className="size-14 rounded-full border-4 border-gradient-to-r from-green-600 via-yellow-500 to-red-600 p-0.5 shadow-xl">
                <div className="size-full rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCth_pugJGhwxpO56uw28WqRahiXIS5rLkvwxpCCoJzY3jIiuX3uEElmNyv0_k2QgINs8-60VHj-TFzAnIgpWBU90gjRfeJ8abImMBNGR0LVbTlrGT6i59qzOXLNYUXAh7Qkob93lz2FWUy7tJ90Tek_w3oakLB_ZGHICPdSQwma4mkMAlYcnbcirAfHuFWi5_j6pUevN5ihSUeXEKSg2QuM4W0LWwvqy1SUAh-UqwUr8eDBD7SugOUyW5Pal4MeVtVvSdydqCPhCmC")'}}></div>
              </div>
              <div className="absolute bottom-0 right-0 size-5 bg-primary border-3 border-white rounded-full shadow-lg"></div>
            </button>
            <div>
              <p className="text-text-muted text-base font-semibold">Dalal ak diam 👋</p>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
                DORO CISSÉ
              </h1>
              <p className="text-lg font-bold text-primary mt-1">Catalogue des Saveurs</p>
            </div>
          </div>
          <button className="size-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/30">
            <span className="material-symbols-outlined text-white text-3xl">notifications</span>
          </button>
        </div>

        {/* Recherche premium */}
        <div className="relative drop-shadow-2xl">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center">
            <span className="material-symbols-outlined text-primary text-3xl">search</span>
          </div>
          <input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-16 pr-12 py-5 rounded-3xl bg-white/90 dark:bg-surface-dark/90 text-lg font-medium shadow-2xl border-4 border-gradient-to-r from-green-600 via-yellow-500 to-red-600 focus:outline-none"
            placeholder="Rechercher une recette savoureuse..."
            type="text"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-6 flex items-center text-primary">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          )}
        </div>

        {/* Filtres Tags – pills premium */}
        <div className="mt-6">
          <p className="text-sm font-bold uppercase tracking-wider text-text-muted mb-3">Catégories & Tags</p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button 
              onClick={() => setSelectedTag(null)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md ${!selectedTag ? 'bg-gradient-to-r from-green-600 to-primary text-white' : 'bg-white/80 dark:bg-surface-dark/80 text-text-secondary border border-primary/20'}`}
            >
              Tout
            </button>
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md whitespace-nowrap ${selectedTag === tag ? 'bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white' : 'bg-white/80 dark:bg-surface-dark/80 text-text-secondary border border-primary/20'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Filtres Temps */}
        <div className="mt-5">
          <p className="text-sm font-bold uppercase tracking-wider text-text-muted mb-3">Temps de préparation</p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button 
              onClick={() => setMaxTime(null)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md ${maxTime === null ? 'bg-gradient-to-r from-green-600 to-primary text-white' : 'bg-white/80 dark:bg-surface-dark/80 text-text-secondary border border-primary/20'}`}
            >
              Toute durée
            </button>
            {[{ label: '< 30 min', val: 30 }, { label: '< 1 h', val: 60 }, { label: '< 2 h', val: 120 }].map(t => (
              <button 
                key={t.val}
                onClick={() => setMaxTime(t.val === maxTime ? null : t.val)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md whitespace-nowrap ${maxTime === t.val ? 'bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white' : 'bg-white/80 dark:bg-surface-dark/80 text-text-secondary border border-primary/20'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Résultats Grid – cartes immersives */}
      <main className="px-5 mt-8 pb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 bg-clip-text text-transparent">
            {filteredRecipes.length} résultat{filteredRecipes.length > 1 ? 's' : ''}
          </h2>
          {(searchTerm || selectedTag || maxTime) && (
            <button 
              onClick={() => { setSearchTerm(''); setSelectedTag(null); setMaxTime(null); }}
              className="text-base font-bold text-primary underline decoration-2 underline-offset-4"
            >
              Réinitialiser
            </button>
          )}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-2 gap-5">
            {filteredRecipes.map(recipe => (
              <article 
                key={recipe.id} 
                className="group cursor-pointer transition-all hover:scale-105"
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url("${recipe.image}")`}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/15 via-yellow-500/10 to-red-600/15"></div>
                  <button className="absolute top-3 right-3 size-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/60 transition-all">
                    <span className="material-symbols-outlined text-white text-2xl group-hover:text-red-500">favorite</span>
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-4 py-2 rounded-full text-sm font-extrabold bg-gradient-to-r from-green-600 to-primary text-white shadow-lg">
                      {recipe.tags[0] || 'Sénégal'}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-extrabold text-text-main dark:text-white group-hover:bg-gradient-to-r from-green-600 to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {recipe.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-text-secondary text-sm font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-primary">schedule</span> {recipe.time}
                    </span>
                    <span>•</span>
                    <span className="font-bold uppercase">{recipe.difficulty}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined text-8xl text-gray-300 mb-6">search_off</span>
            <p className="text-xl font-bold text-text-muted mb-4">Aucune recette trouvée</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedTag(null); setMaxTime(null); }}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-primary text-white font-extrabold text-lg rounded-3xl shadow-2xl"
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