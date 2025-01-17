import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/kasa/" element={<Home />} />
      <Route path="/fiche-logement/:id" element={<FicheLogement />} /> {/* Route dynamique */}
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
