import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { RECIPES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featured = RECIPES[0];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
      {/* Fond motif wax sénégalais élégant et subtil */}
      <div 
        className="absolute inset-0 opacity-8 pointer-events-none bg-cover bg-repeat"
        style={{
          backgroundImage: 'url("https://www.shutterstock.com/image-vector/african-wax-print-fabric-ethnic-260nw-1852674685.jpg")', // Motif wax authentique et moderne
        }}
      ></div>

      {/* Header avec gradient drapeau subtil */}
      <div className="relative bg-gradient-to-b from-green-50/50 via-yellow-50/30 to-red-50/50 dark:from-green-900/20 dark:via-yellow-900/10 dark:to-red-900/20 shadow-2xl z-20 pb-4">
        <div className="flex items-center justify-between px-5 pt-8 pb-4">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div 
                className="size-16 rounded-full border-5 border-gradient-to-r from-green-600 via-yellow-500 to-red-600 p-0.5 shadow-2xl"
              >
                <div 
                  className="size-full rounded-full bg-cover bg-center"
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLQkkgEU9304vAjFsPrWmvtX0yloS1ZEpx9SaFvf5xKYCL7V_3_zxQX1FlCqEaBu98aH2eM31Zg8XKyzytqwuzF9mCesk_TvLzK-V93wpLsEkgE0OretlUUMjDBULS8PSXYk-Xz93GYd_jJSE6RJ2hkpJstIb766dCu6bHXQKMETZw6TFD3a1KebbOgE4DOnwFusptjzqcxR05SdkBgpKqPxP7ZEk4JWGkTdEWVCcw1ygM_ApRdnH4Sk7FHqZppsExYDTBznQ5M487")'}}
                ></div>
              </div>
              <div className="absolute bottom-0 right-0 size-6 bg-primary border-4 border-white rounded-full shadow-xl"></div>
            </div>

            {/* TON NOM EN GRADIENT DRAPEAU + ÉTOILE */}
            <div className="flex flex-col">
              <p className="text-text-muted text-base font-semibold">Dalal ak diam 👋</p>
              <h1 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 bg-clip-text text-transparent drop-shadow-md">
                DORO CISSÉ
              </h1>
              <p className="text-primary text-lg font-bold mt-2 flex items-center gap-2">
                Créateur de Sénégal Flavors
                <span className="text-yellow-500 text-3xl">★</span>
              </p>
              <p className="text-text-muted text-sm mt-3 italic">La Téranga dans chaque saveur du Sénégal</p>
            </div>
          </div>

          <button className="size-14 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/30">
            <span className="material-symbols-outlined text-white dark:text-gray-200 text-3xl">notifications</span>
          </button>
        </div>

        {/* Barre de recherche premium avec bordure drapeau */}
        <div className="px-5 py-5">
          <div 
            className="flex w-full items-center rounded-3xl bg-white/90 dark:bg-surface-dark/90 h-16 overflow-hidden shadow-2xl border-4 border-gradient-to-r from-green-600 via-yellow-500 to-red-600 transition-all cursor-pointer hover:shadow-3xl"
            onClick={() => navigate('/catalog')}
          >
            <div className="pl-6 text-primary">
              <span className="material-symbols-outlined text-3xl">search</span>
            </div>
            <input 
              readOnly 
              className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder:text-text-muted px-5 text-lg font-medium" 
              placeholder="Thiéboudieune, Mafé, Yassa..." 
            />
            <button className="pr-6 text-primary">
              <span className="material-symbols-outlined text-3xl">tune</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Hero Plat de la Semaine – encore plus immersif */}
        <div className="px-5 pt-10 pb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 bg-clip-text text-transparent drop-shadow">
              Plat de la Semaine
            </h3>
            <button className="text-lg font-bold text-primary underline decoration-2" onClick={() => navigate('/catalog')}>
              Voir tout →
            </button>
          </div>
          <div 
            className="group relative w-full h-[30rem] rounded-3xl overflow-hidden shadow-3xl cursor-pointer transition-all hover:shadow-4xl"
            onClick={() => navigate(`/recipe/${featured.id}`)}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1200 group-hover:scale-110" style={{backgroundImage: `url("${featured.image}")`}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/25 via-yellow-500/20 to-red-600/25"></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="flex gap-4 mb-4">
                <span className="px-5 py-2 bg-primary text-background-dark text-base font-extrabold rounded-full shadow-lg">Top Recette</span>
                <span className="px-5 py-2 bg-white/40 backdrop-blur-lg text-white text-base font-medium rounded-full flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-[20px]">schedule</span> {featured.time}
                </span>
              </div>
              <h2 className="text-5xl font-extrabold text-white mb-3 drop-shadow-2xl">{featured.name}</h2>
              <p className="text-gray-100 text-lg mb-8 line-clamp-2 drop-shadow-lg">{featured.description}</p>
              <button className="w-full h-16 bg-gradient-to-r from-green-600 to-primary hover:from-green-700 hover:to-primary-dark text-white font-extrabold text-xl rounded-3xl flex items-center justify-center gap-4 shadow-2xl transition-all active:scale-98">
                <span className="material-symbols-outlined text-3xl">skillet</span>
                Cuisiner maintenant
              </button>
            </div>
          </div>
        </div>

        {/* Les autres sections (Incontournables et Culture) restent belles – on peut les upgrader plus tard si tu veux */}
        {/* ... (garde le code existant pour ces sections) ... */}

      </main>

      {/* Footer fier et moderne */}
      <div className="fixed bottom-20 left-0 right-0 z-10 pointer-events-none">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 p-1 rounded-full shadow-3xl">
            <div className="bg-white dark:bg-surface-dark px-10 py-4 rounded-full">
              <p className="text-xl font-extrabold text-center bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 bg-clip-text text-transparent flex items-center gap-3">
                Créé avec ❤️ et Téranga par Doro Cissé
                <span className="text-3xl">🇸🇳</span> 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
};

export default Home;