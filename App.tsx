
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import RecipeDetail from './screens/RecipeDetail';
import Cooking from './screens/Cooking';
import ChatBot from './components/ChatBot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/cook/:id" element={<Cooking />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
