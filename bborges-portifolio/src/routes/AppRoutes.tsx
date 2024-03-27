import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
//import About from '../pages/About';
//import Portfolio from '../pages/Portfolio';
//import Contact from '../pages/Contact';
//import NotFound from '../pages/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*<Route path="/about" element={<About />} /> */}
      {/*<Route path="/portfolio" element={<Portfolio />} /> */}
      {/*<Route path="/contact" element={<Contact />} /> */}
      {/*<Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
