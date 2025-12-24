
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RECIPES } from '../constants';
import { Ingredient, CookingStep } from '../types';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = RECIPES.find(r => r.id === id);

  const [userRating, setUserRating] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (id) {
      const savedRating = localStorage.getItem(`recipe_rating_${id}`);
      if (savedRating) {
        setUserRating(parseInt(savedRating, 10));
      }
      
      const savedSteps = localStorage.getItem(`recipe_steps_${id}`);
      if (savedSteps) {
        setCompletedSteps(new Set(JSON.parse(savedSteps)));
      }
    }
  }, [id]);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    if (id) {
      localStorage.setItem(`recipe_rating_${id}`, rating.toString());
    }
  };

  const toggleStep = (stepId: number) => {
    const newSteps = new Set(completedSteps);
    if (newSteps.has(stepId)) {
      newSteps.delete(stepId);
    } else {
      newSteps.add(stepId);
    }
    setCompletedSteps(newSteps);
    if (id) {
      localStorage.setItem(`recipe_steps_${id}`, JSON.stringify(Array.from(newSteps)));
    }
  };

  if (!recipe) {
    return <div className="p-10 text-center" role="alert">Recette non trouvée.</div>;
  }

  // Group ingredients by category
  const groupedIngredients = recipe.ingredients.reduce((acc, ing) => {
    if (!acc[ing.category]) {
      acc[ing.category] = [];
    }
    acc[ing.category].push(ing);
    return acc;
  }, {} as Record<string, Ingredient[]>);

  const categories = Object.keys(groupedIngredients);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32">
      {/* Top Bar */}
      <nav className="fixed top-0 w-full z-20 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800" aria-label="Navigation secondaire">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <button 
            onClick={() => navigate(-1)} 
            className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Retour à la page précédente"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold">Détails de la recette</h2>
          <button 
            className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-red-500 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Ajouter aux favoris"
          >
            <span className="material-symbols-outlined filled">favorite</span>
          </button>
        </div>
      </nav>
      <div className="h-[72px]"></div>

      <main className="max-w-md mx-auto flex flex-col">
        {/* Hero Image */}
        <section className="px-4 py-4" aria-label="Aperçu de la recette">
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-sm group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" 
              style={{backgroundImage: `url("${recipe.image}")`}}
              role="img"
              aria-label={`Photo de ${recipe.name}`}
            ></div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="inline-flex items-center rounded-md bg-primary/90 px-2 py-1 text-xs font-bold text-green-900 ring-1 ring-inset ring-green-600/20 backdrop-blur-md">
                {recipe.tags[0]}
              </span>
            </div>
          </div>
        </section>

        {/* Details */}
        <div className="px-5">
          <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-2">{recipe.name}</h1>
          <p className="text-text-muted text-sm font-medium mb-4">{recipe.description}</p>
          
          <div className="flex items-center gap-2 mb-6" aria-label={`Note moyenne : ${recipe.rating} sur 5 étoiles basées sur ${recipe.reviews} avis`}>
            <div className="flex text-yellow-400" aria-hidden="true">
              <span className="material-symbols-outlined filled text-xl">star</span>
              <span className="material-symbols-outlined filled text-xl">star</span>
              <span className="material-symbols-outlined filled text-xl">star</span>
              <span className="material-symbols-outlined filled text-xl">star</span>
              <span className="material-symbols-outlined text-xl">star_half</span>
            </div>
            <span className="text-sm font-bold">{recipe.rating}</span>
            <span className="text-sm text-text-muted">({recipe.reviews} avis)</span>
            <span className="mx-2 text-gray-300" aria-hidden="true">•</span>
            <span className="text-sm text-primary font-bold">Par {recipe.chef}</span>
          </div>

          {/* Interactive Rating Section */}
          <section className="bg-white dark:bg-surface-dark rounded-2xl p-5 mb-8 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden" aria-labelledby="rating-title">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex flex-col items-center text-center">
              <p id="rating-title" className="text-sm font-bold text-text-main dark:text-gray-200 mb-2">Votre note pour cette recette</p>
              <div className="flex gap-1 mb-1" role="group" aria-label="Choisir une note de 1 à 5 étoiles">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setIsHovering(star)}
                    onMouseLeave={() => setIsHovering(null)}
                    onClick={() => handleRate(star)}
                    className="focus:outline-none transition-transform active:scale-90"
                    aria-label={`Donner ${star} étoile${star > 1 ? 's' : ''} sur 5`}
                    aria-pressed={star <= userRating}
                  >
                    <span 
                      className={`material-symbols-outlined text-3xl transition-colors duration-200 ${
                        (isHovering !== null ? star <= isHovering : star <= userRating)
                          ? 'filled text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-text-muted h-4" aria-live="polite">
                {userRating > 0 ? `Merci ! Vous avez donné ${userRating}/5` : 'Cliquez pour noter'}
              </p>
            </div>
          </section>

          {/* History Section */}
          <article className="bg-primary/10 dark:bg-primary/5 rounded-xl p-5 mb-8 border border-primary/20 relative" aria-labelledby="history-title">
            <div className="absolute -top-3 -right-3 bg-white dark:bg-surface-dark rounded-full p-1.5 shadow-sm border border-gray-100 dark:border-gray-800" aria-hidden="true">
              <span className="material-symbols-outlined text-primary text-xl">history_edu</span>
            </div>
            <h3 id="history-title" className="text-sm font-bold uppercase tracking-wider mb-2">L'Histoire de ce plat</h3>
            <p className="text-text-main dark:text-gray-300 text-sm leading-relaxed">{recipe.history}</p>
          </article>

          {/* Ingredients Section */}
          <section className="mb-8" aria-labelledby="ingredients-title">
            <div className="flex items-center justify-between mb-4">
              <h3 id="ingredients-title" className="text-xl font-bold">Ingrédients</h3>
              <span className="text-xs text-text-muted font-bold uppercase tracking-widest" aria-label={`${recipe.ingredients.length} ingrédients au total`}>{recipe.ingredients.length} items</span>
            </div>
            
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category} className="space-y-2">
                  <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest pl-1">{category}</h4>
                  <div className="space-y-2" role="list">
                    {groupedIngredients[category].map((ing, i) => (
                      <label key={i} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${ing.isSecret ? 'bg-yellow-50/50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-900/30 ring-1 ring-yellow-100 dark:ring-transparent' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark hover:border-primary/50'}`} role="listitem">
                        <input 
                          className="mt-1 size-5 rounded border-gray-300 text-primary focus:ring-primary bg-transparent cursor-pointer" 
                          type="checkbox"
                          aria-label={`Avoir ${ing.name} : ${ing.amount}`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-base text-text-main dark:text-white">{ing.name}</p>
                            {ing.isSecret && (
                              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/40 px-2 py-0.5 rounded-full" aria-label="Ingrédient secret">
                                <span className="material-symbols-outlined text-yellow-700 dark:text-yellow-500 text-[14px] filled" aria-hidden="true">lightbulb</span>
                                <span className="text-[10px] font-bold text-yellow-800 dark:text-yellow-400 uppercase">Secret</span>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-text-muted mt-0.5">{ing.amount}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cooking Steps Section */}
          <section className="mb-8" aria-labelledby="steps-title">
            <div className="flex items-center justify-between mb-6">
              <h3 id="steps-title" className="text-xl font-bold">Étapes de préparation</h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full" aria-live="polite">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  {completedSteps.size} / {recipe.steps.length} Terminé
                </span>
              </div>
            </div>
            
            <div className="space-y-8">
              {recipe.steps.length > 0 ? (
                recipe.steps.map((step: CookingStep, index: number) => {
                  const isCompleted = completedSteps.has(step.id);
                  return (
                    <div key={step.id} className="relative flex gap-5 group" role="article" aria-label={`Étape ${index + 1} : ${step.title}`}>
                      <div className="flex flex-col items-center">
                        <button 
                          onClick={() => toggleStep(step.id)}
                          role="checkbox"
                          aria-checked={isCompleted}
                          aria-label={isCompleted ? `Marquer l'étape ${index + 1} comme non terminée` : `Marquer l'étape ${index + 1} comme terminée`}
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-all duration-300 shadow-sm ${
                            isCompleted 
                              ? 'bg-primary text-background-dark scale-110' 
                              : 'bg-white dark:bg-surface-dark border-2 border-primary text-primary'
                          }`}
                        >
                          {isCompleted ? (
                            <span className="material-symbols-outlined font-bold">check</span>
                          ) : (
                            index + 1
                          )}
                        </button>
                        {index < recipe.steps.length - 1 && (
                          <div className={`w-0.5 grow my-2 rounded-full transition-colors duration-500 ${
                            isCompleted ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                          }`} aria-hidden="true"></div>
                        )}
                      </div>
                      <div className={`flex flex-col pb-4 flex-1 transition-opacity duration-300 ${isCompleted ? 'opacity-50' : 'opacity-100'}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`text-lg font-bold text-text-main dark:text-white transition-all ${isCompleted ? 'line-through decoration-primary decoration-2' : ''}`}>
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-text-secondary dark:text-gray-300 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        {step.image && (
                          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 mb-2">
                            <img 
                              src={step.image} 
                              alt={`Illustration de l'étape : ${step.title}`} 
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                            />
                            {isCompleted && (
                              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px] flex items-center justify-center" aria-hidden="true">
                                <span className="material-symbols-outlined text-primary text-6xl opacity-50 font-bold">check_circle</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 bg-gray-50 dark:bg-surface-dark rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-center">
                  <span className="material-symbols-outlined text-gray-400 text-5xl mb-3" aria-hidden="true">pending_actions</span>
                  <p className="text-sm text-text-muted italic max-w-[200px] mx-auto leading-relaxed">Les étapes détaillées arrivent bientôt pour cette recette.</p>
                </div>
              )}
            </div>
          </section>

          {/* Chef Tips Section */}
          {recipe.chefTips && recipe.chefTips.length > 0 && (
            <section className="mb-8" aria-labelledby="chef-tips-title">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">emoji_objects</span>
                <h3 id="chef-tips-title" className="text-xl font-bold">Conseils du Chef</h3>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-primary/20 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                <ul className="space-y-4 relative z-10">
                  {recipe.chefTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 size-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(43,238,108,0.6)]" aria-hidden="true"></div>
                      <p className="text-sm text-text-main dark:text-gray-200 leading-relaxed font-medium">
                        {tip}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Stats Grid */}
          <section className="grid grid-cols-3 gap-3 mb-8" aria-label="Informations rapides">
            <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:scale-[1.02]">
              <span className="material-symbols-outlined text-primary mb-1" aria-hidden="true">group</span>
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Pour</span>
              <span className="text-sm font-bold">6 Pers.</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:scale-[1.02]">
              <span className="material-symbols-outlined text-primary mb-1" aria-hidden="true">schedule</span>
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Temps</span>
              <span className="text-sm font-bold">{recipe.time}</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:scale-[1.02]">
              <span className="material-symbols-outlined text-primary mb-1" aria-hidden="true">local_fire_department</span>
              <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Niveau</span>
              <span className="text-sm font-bold">{recipe.difficulty}</span>
            </div>
          </section>
        </div>
      </main>

      {/* FAB */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white dark:from-background-dark via-white dark:via-background-dark to-transparent pt-12 max-w-md mx-auto z-10">
        <button 
          onClick={() => navigate(`/cook/${recipe.id}`)} 
          className="w-full h-14 bg-primary hover:bg-primary-dark text-background-dark font-extrabold text-lg rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95 transform"
          aria-label="Démarrer le mode cuisine guidée pour cette recette"
        >
          <span className="material-symbols-outlined font-bold" aria-hidden="true">skillet</span>
          Cuisiner maintenant
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
