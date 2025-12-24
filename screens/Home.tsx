
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { RECIPES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featured = RECIPES[0];

  return (
    <div className="bg-background-light dark:bg-background-dark h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-surface-light dark:bg-surface-dark shadow-sm z-20 pb-2">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-10 rounded-full border-2 border-primary bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLQkkgEU9304vAjFsPrWmvtX0yloS1ZEpx9SaFvf5xKYCL7V_3_zxQX1FlCqEaBu98aH2eM31Zg8XKyzytqwuzF9mCesk_TvLzK-V93wpLsEkgE0OretlUUMjDBULS8PSXYk-Xz93GYd_jJSE6RJ2hkpJstIb766dCu6bHXQKMETZw6TFD3a1KebbOgE4DOnwFusptjzqcxR05SdkBgpKqPxP7ZEk4JWGkTdEWVCcw1ygM_ApRdnH4Sk7FHqZppsExYDTBznQ5M487")'}}></div>
              <div className="absolute bottom-0 right-0 size-3 bg-primary border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-text-muted text-xs font-medium">Bienvenue,</p>
              <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight">Dalal ak diam, Awa!</h2>
            </div>
          </div>
          <button className="size-10 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center">
            <span className="material-symbols-outlined text-text-main dark:text-white">notifications</span>
          </button>
        </div>
        {/* Search */}
        <div className="px-4 py-2">
          <div 
            className="flex w-full items-center rounded-xl bg-background-light dark:bg-background-dark h-12 overflow-hidden border border-transparent focus-within:border-primary/50"
            onClick={() => navigate('/catalog')}
          >
            <div className="pl-4 text-text-muted">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              readOnly 
              className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-text-muted px-3" 
              placeholder="Rechercher Thiéboudieune..." 
            />
            <button className="pr-4 text-primary">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Hero: Plat de la Semaine */}
        <div className="px-4 pt-6 pb-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Plat de la Semaine</h3>
            <button className="text-sm font-medium text-primary" onClick={() => navigate('/catalog')}>Voir tout</button>
          </div>
          <div className="group relative w-full h-[26rem] rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => navigate(`/recipe/${featured.id}`)}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url("${featured.image}")`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-5">
              <div className="flex gap-2 mb-2">
                <span className="px-2.5 py-1 bg-primary text-black text-xs font-bold rounded-full">Top Recette</span>
                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> {featured.time}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-1">{featured.name}</h2>
              <p className="text-gray-200 text-sm mb-4 line-clamp-2">{featured.description}</p>
              <button className="w-full h-12 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2">
                <span>Cuisiner maintenant</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Incontournables Horizontal Scroll */}
        <div className="pt-6 pb-2">
          <div className="px-4 flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Les Incontournables</h3>
          </div>
          <div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar snap-x">
            {RECIPES.map(recipe => (
              <div key={recipe.id} className="flex-none w-60 snap-start cursor-pointer" onClick={() => navigate(`/recipe/${recipe.id}`)}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${recipe.image}")`}}></div>
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-yellow-500 text-[14px] filled">star</span>
                    <span className="text-xs font-bold text-gray-900">{recipe.rating}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold">{recipe.name}</h4>
                  <div className="flex items-center gap-3 mt-1 text-text-muted text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">bolt</span> {recipe.difficulty}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{recipe.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="px-4 py-6">
          <h3 className="text-lg font-bold mb-3">Découverte Culturelle</h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-3 flex gap-4 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="size-24 flex-shrink-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByXPSM81KtZ6h8YiIP8vNnC1nj6kuK-1v0zAOVTEY_NS_c6pdU6mT6pBBpg44uyhlLe3e63QlgUDGtrO1wekcv3M9RlIw9tsc4I0JLh1DtIW8QPRqoBio2dH67W3a6t5uB_IXat5NtFfRq1EbH9UveSO_dNAIIiaXP3nOUoh5JOE7XyuR0efVkEA55IGP36zSiQ7y3ldDTkH9UWxF5un6RHmagZL6ggulrKpzfkLhDeHaETTl4e6iK0n6wI1Dqjb3etCbBXoU0xMkc")'}}></div>
            </div>
            <div className="flex flex-col justify-between py-1">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-wide">Ingrédient Star</span>
                <h4 className="text-base font-bold mt-1 leading-snug">L'histoire secrète du Gombo</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">3 min de lecture</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <button className="text-xs font-bold flex items-center text-primary">
                  Lire <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav active="home" />
    </div>
  );
};

export default Home;
