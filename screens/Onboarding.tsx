
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-yellow/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 right-0 w-72 h-72 bg-accent-red/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-md mx-auto h-full justify-between p-6">
        <div className="h-4"></div>
        
        <div className="flex flex-col items-center justify-center space-y-8 flex-grow cursor-pointer" onClick={() => navigate('/home')}>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYVPPLkdH6aQckrVEvaPy7cAUobW1n90v-vUHgJwsQnYeNDTP0ozS30Ug3_FuBtEOvKuIZq8qj9H5HcHat05zcbEHDk0pbEnaGIzH2OhzFkjjQlJ2dYgos5jN4EP4fYa6Yc2bNQiwOjtjxVuG2WhBNDLu9LNMv359jRhfmrK4yyB-lIZ9ksmj3WPp1frABTS572CM0ijT38RbKqTXmEKShA-Xn9rv4EV13ss2itrLDKIqIkTMLmnPLPp0KmmJpbFB_2go53Va7nGyz")'}}>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 p-2 rounded-full">
                <span className="material-symbols-outlined text-white text-2xl">local_dining</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[28%] left-1/2 transform -translate-x-1/2 w-20 h-20 bg-background-light dark:bg-background-dark rounded-full p-2 flex items-center justify-center shadow-lg">
            <div className="w-full h-full bg-primary rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="material-symbols-outlined text-background-dark text-4xl">skillet</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center pt-6 w-full">
            <p className="text-accent-yellow dark:text-primary font-bold tracking-widest text-xs uppercase mb-3">Authenticité & Saveurs</p>
            <h1 className="text-text-main dark:text-white tracking-tight text-[36px] font-extrabold leading-[1.1] pb-2">
              Cuisine<br/>
              <span className="text-senegal-gradient">Sénégalaise</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed px-4 max-w-xs">
              L'esprit de la <span className="font-bold text-primary">Teranga</span> dans votre assiette.
            </p>
          </div>
        </div>

        <div className="w-full pb-6 pt-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end px-1">
              <p className="text-gray-800 dark:text-gray-200 text-sm font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm animate-spin">progress_activity</span>
                Préparation des saveurs...
              </p>
            </div>
            <div className="rounded-full bg-gray-200 dark:bg-gray-800 h-1.5 overflow-hidden">
              <div className="h-full rounded-full bg-primary shadow-[0_0_10px_rgba(43,238,108,0.5)] transition-all duration-[3000ms] ease-linear" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
