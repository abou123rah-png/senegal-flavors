import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { RECIPES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featured = RECIPES[0];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
      {/* Fond subtil motif wax sénégalais */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none bg-cover bg-repeat"
        style={{
          backgroundImage: 'url("https://thumbs.dreamstime.com/b/vibrant-african-wax-print-fabric-texture-background-bright-yellow-red-green-bold-geometric-motifs-high-contrast-369452346.jpg")',
        }}
      ></div>

      {/* Header */}
      <div className="relative bg-surface-light dark:bg-surface-dark shadow-md z-20 pb-2">
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div 
                className="size-14 rounded-full border-4 border-primary bg-cover bg-center shadow-xl"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLQkkgEU9304vAjFsPrWmvtX0yloS1ZEpx9SaFvf5xKYCL7V_3_zxQX1FlCqEaBu98aH2eM31Zg8XKyzytqwuzF9mCesk_TvLzK-V93wpLsEkgE0OretlUUMjDBULS8PSXYk-Xz93GYd_jJSE6RJ2hkpJstIb766dCu6bHXQKMETZw6TFD3a1KebbOgE4DOnwFusptjzqcxR05SdkBgpKqPxP7ZEk4JWGkTdEWVCcw1ygM_ApRdnH4Sk7FHqZppsExYDTBznQ5M487")'}}
              ></div>
              <div className="absolute bottom-0 right-0 size-5 bg-primary border-4 border-white rounded-full shadow-lg"></div>
            </div>

            {/* TON NOM EN HAUT À CÔTÉ DE LA PHOTO */}
            <div className="flex flex-col">
              <p className="text-text-muted text-sm font-medium">Dalal ak diam 👋</p>
              <h1 className="text-3xl font-extrabold text-text-main dark:text-white leading-tight">
                DORO CISSÉ
              </h1>
              <p className="text-primary text-sm font-bold mt-1 flex items-center gap-1">
                Créateur de Sénégal Flavors
                <span className="text-yellow-500 text-lg">★</span>
              </p>
              <p className="text-text-muted text-xs mt-2">L'esprit de la Téranga dans chaque plat</p>
            </div>
          </div>

          <button className="size-12 rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-text-main dark:text-white text-2xl">notifications</span>
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <div 
            className="flex w-full items-center rounded-2xl bg-background-light dark:bg-background-dark h-14 overflow-hidden border-2 border-transparent focus-within:border-primary shadow-md transition-all cursor-pointer"
            onClick={() => navigate('/catalog')}
          >
            <div className="pl-5 text-text-muted">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <input 
              readOnly 
              className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-text-muted px-4 text-base" 
              placeholder="Thiéboudieune, Mafé, Yassa..." 
            />
            <button className="pr-5 text-primary">
              <span className="material-symbols-outlined text-2xl">tune</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Hero: Plat de la Semaine */}
        <div className="px-4 pt-8 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-extrabold text-senegal-gradient">Plat de la Semaine</h3>
            <button className="text-base font-bold text-primary" onClick={() => navigate('/catalog')}>Voir tout →</button>
          </div>
          <div 
            className="group relative w-full h-[28rem] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-transform hover:scale-[1.01]"
            onClick={() => navigate(`/recipe/${featured.id}`)}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{backgroundImage: `url("${featured.image}")`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-yellow-500/20 to-red-600/20"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <div className="flex gap-3 mb-3">
                <span className="px-4 py-1.5 bg-primary text-background-dark text-sm font-bold rounded-full shadow-md">Top Recette</span>
                <span className="px-4 py-1.5 bg-white/30 backdrop-blur-md text-white text-sm font-medium rounded-full flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-[16px]">schedule</span> {featured.time}
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">{featured.name}</h2>
              <p className="text-gray-100 text-base mb-6 line-clamp-2 drop-shadow">{featured.description}</p>
              <button className="w-full h-14 bg-primary hover:bg-primary-dark text-background-dark font-extrabold text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95">
                <span className="material-symbols-outlined text-2xl">skillet</span>
                Cuisiner maintenant
              </button>
            </div>
          </div>
        </div>

        {/* Incontournables */}
        <div className="pt-8 pb-4">
          <div className="px-4 mb-4">
            <h3 className="text-2xl font-extrabold">Les Incontournables</h3>
          </div>
          <div className="flex overflow-x-auto gap-5 px-4 pb-6 no-scrollbar snap-x">
            {RECIPES.map(recipe => (
              <div key={recipe.id} className="flex-none w-64 snap-start cursor-pointer group" onClick={() => navigate(`/recipe/${recipe.id}`)}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg transition-transform group-hover:scale-105">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${recipe.image}")`}}></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                    <span className="material-symbols-outlined text-yellow-500 text-[16px] filled">star</span>
                    <span className="text-sm font-bold text-gray-900">{recipe.rating}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{recipe.name}</h4>
                <div className="flex items-center gap-4 mt-2 text-text-muted text-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">bolt</span> {recipe.difficulty}
                  </span>
                  <span>{recipe.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="px-4 py-8">
          <h3 className="text-2xl font-extrabold mb-5">Découverte Culturelle</h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 flex gap-5 shadow-xl border border-primary/10">
            <div className="size-28 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByXPSM81KtZ6h8YiIP8vNnC1nj6kuK-1v0zAOVTEY_NS_c6pdU6mT6pBBpg44uyhlLe3e63QlgUDGtrO1wekcv3M9RlIw9tsc4I0JLh1DtIW8QPRqoBio2dH67W3a6t5uB_IXat5NtFfRq1EbH9UveSO_dNAIIiaXP3nOUoh5JOE7XyuR0efVkEA55IGP36zSiQ7y3ldDTkH9UWxF5un6RHmagZL6ggulrKpzfkLhDeHaETTl4e6iK0n6wI1Dqjb3etCbBXoU0xMkc")'}}></div>
            </div>
            <div className="flex flex-col justify-between py-2">
              <div>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Ingrédient Star</span>
                <h4 className="text-xl font-extrabold mt-2 leading-snug">L'histoire secrète du Gombo</h4>
                <p className="text-text-muted text-sm mt-2">Symbole de liaison et de richesse dans la cuisine ouest-africaine.</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-sm text-text-muted">3 min de lecture</span>
                <button className="text-sm font-bold flex items-center text-primary">
                  Lire l'article <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer discret (gardé en bonus) */}
      <div className="fixed bottom-16 left-0 right-0 z-10 pointer-events-none">
        <div className="flex justify-center">
          <div className="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl pointer-events-auto border border-primary/20">
            <p className="text-sm font-bold text-center text-text-main dark:text-white flex items-center gap-2">
              Créé avec ❤️ par <span className="text-primary">Doro Cissé</span>
              <span className="text-yellow-500 text-lg">★</span> Sénégal 2025
            </p>
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
};

export default Home;