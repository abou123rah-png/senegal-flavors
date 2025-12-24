
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  active: 'home' | 'catalog' | 'favorite' | 'profile';
}

const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-2 z-50">
      <div className="flex justify-around items-end h-16 pb-4">
        <button 
          onClick={() => navigate('/home')} 
          className={`flex flex-col items-center gap-1 w-full transition-colors ${active === 'home' ? 'text-primary relative' : 'text-text-secondary dark:text-gray-400 hover:text-primary'}`}
        >
          {active === 'home' && <div className="absolute -top-5 w-12 h-1 bg-primary rounded-b-full"></div>}
          <span className={`material-symbols-outlined text-[26px] ${active === 'home' ? 'filled' : ''}`}>home</span>
          <span className={`text-[10px] ${active === 'home' ? 'font-bold' : 'font-medium'}`}>Accueil</span>
        </button>

        <button 
          onClick={() => navigate('/catalog')} 
          className={`flex flex-col items-center gap-1 w-full transition-colors ${active === 'catalog' ? 'text-primary relative' : 'text-text-secondary dark:text-gray-400 hover:text-primary'}`}
        >
          {active === 'catalog' && <div className="absolute -top-5 w-12 h-1 bg-primary rounded-b-full"></div>}
          <span className={`material-symbols-outlined text-[26px] ${active === 'catalog' ? 'fill-current' : ''}`}>menu_book</span>
          <span className={`text-[10px] ${active === 'catalog' ? 'font-bold' : 'font-medium'}`}>Catalogue</span>
        </button>

        <button className="flex flex-col items-center gap-1 w-full text-text-secondary dark:text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[26px]">favorite</span>
          <span className="text-[10px] font-medium">Favoris</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 w-full text-text-secondary dark:text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[26px]">person</span>
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </div>
      <div className="h-2 w-full"></div>
    </div>
  );
};

export default BottomNav;
