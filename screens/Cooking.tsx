
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RECIPES } from '../constants';

const Cooking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  
  const recipe = RECIPES.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <span className="material-symbols-outlined text-6xl text-text-muted mb-4">error</span>
          <h2 className="text-2xl font-bold mb-2">Recette non trouvée</h2>
          <button onClick={() => navigate('/catalog')} className="text-primary font-bold underline">Retour au catalogue</button>
        </div>
      </div>
    );
  }

  const currentStep = recipe.steps[stepIndex];
  const totalSteps = recipe.steps.length;
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const nextStep = () => {
    if (stepIndex < totalSteps - 1) {
      setStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Logic for finishing the recipe
      navigate('/home');
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col max-w-md mx-auto shadow-xl">
      {/* Top Bar */}
      <nav className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-100 dark:border-gray-800" aria-label="Contrôles de cuisine">
        <button 
          onClick={() => navigate(`/recipe/${recipe.id}`)} 
          className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Quitter le mode cuisine et revenir aux détails"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex-1 text-center px-4 overflow-hidden">
          <h2 className="text-sm font-bold truncate opacity-60 uppercase tracking-widest">{recipe.name}</h2>
          <p className="text-xs font-medium text-text-muted">Mode Guidé</p>
        </div>
        <button className="size-10 flex items-center justify-center rounded-full" aria-label="Aide culinaire">
          <span className="material-symbols-outlined text-primary">live_help</span>
        </button>
      </nav>

      <main className="flex-1 flex flex-col">
        {/* Progress Tracker */}
        <section className="px-6 py-4 bg-white dark:bg-surface-dark shadow-sm border-b border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-extrabold flex items-center gap-2">
              <span className="size-6 bg-primary text-background-dark rounded-md flex items-center justify-center text-xs">
                {stepIndex + 1}
              </span>
              Étape sur {totalSteps}
            </h3>
            <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full" aria-live="polite">
              {progress}% complété
            </span>
          </div>
          <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-2 w-full overflow-hidden" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div 
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out shadow-[0_0_8px_rgba(43,238,108,0.4)]" 
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </section>

        {/* Step Content */}
        {currentStep ? (
          <section className="flex-1 flex flex-col p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {currentStep.image && (
              <div className="mb-6 relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 rotate-1 transform transition-transform hover:rotate-0">
                <img 
                  alt={currentStep.title} 
                  className="h-full w-full object-cover" 
                  src={currentStep.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            )}
            
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-black text-text-main dark:text-white leading-tight">
                {currentStep.title}
              </h4>
              <div className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 relative">
                <span className="material-symbols-outlined absolute -top-3 -left-3 size-8 bg-primary text-background-dark rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                  restaurant_menu
                </span>
                <p className="text-text-secondary dark:text-gray-300 text-base leading-relaxed">
                  {currentStep.description}
                </p>
              </div>
            </div>

            {/* Chef Tip / Insight */}
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
               <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-full border-2 border-primary overflow-hidden shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpO69umEtB27_Apr0NG9-W6zaDs6EsK2l98z2TY0VioBaE0nvfrBkNLQVCUQA0IoHxrB_jUdDKo6kg3eeKdBpgIsNEBSlimMAW0OHq91dL4sz1LVaNhnuWGDJuopCDX2jHHgSZ762oKGTUM7-Pv2emu6qJi56jNxkbn45hx8JGmJE48O1UDdIiGvelF93BavedeQIrk5yBIePxlH16TTxmEYZHtxTEgx0FYxjNkXTOUVSYWg6C_XM6z-uZ_t0_bVu-Nk8aGeVsSdg6" alt="Chef Oumar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Le Conseil du Chef</p>
                  <p className="text-sm font-bold text-text-main dark:text-white">Chef Oumar</p>
                </div>
              </div>
              <blockquote className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl border-l-4 border-primary italic text-sm text-text-secondary dark:text-gray-200">
                "{recipe.chefTips?.[stepIndex % (recipe.chefTips?.length || 1)] || "La patience est l'ingrédient secret de toute bonne cuisine sénégalaise."}"
              </blockquote>
            </div>
          </section>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center text-text-muted italic">
             <span className="material-symbols-outlined text-4xl mb-2">pending</span>
             <p>Les instructions détaillées arrivent bientôt.</p>
          </div>
        )}
      </main>

      {/* Navigation Buttons */}
      <footer className="sticky bottom-0 p-6 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex gap-4">
        <button 
          onClick={prevStep}
          disabled={stepIndex === 0}
          className={`h-14 px-6 flex items-center justify-center gap-2 rounded-2xl font-bold transition-all border-2 border-gray-200 dark:border-gray-700 ${
            stepIndex === 0 
              ? 'opacity-0 pointer-events-none' 
              : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-white'
          }`}
          aria-label="Étape précédente"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        
        <button 
          onClick={nextStep}
          className="flex-1 h-14 flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-background-dark font-black text-lg rounded-2xl shadow-xl transition-all active:scale-[0.98] transform"
          aria-label={stepIndex === totalSteps - 1 ? "Terminer la préparation" : "Étape suivante"}
        >
          <span>{stepIndex === totalSteps - 1 ? 'Terminer' : 'Étape Suivante'}</span>
          <span className="material-symbols-outlined font-bold">
            {stepIndex === totalSteps - 1 ? 'check_circle' : 'arrow_forward'}
          </span>
        </button>
      </footer>
    </div>
  );
};

export default Cooking;
