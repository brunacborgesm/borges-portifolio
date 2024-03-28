import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Error } from '../pages/Error404/Error';
//import About from '../pages/About';
//import Portfolio from '../pages/Portfolio';
//import Contact from '../pages/Contact';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*<Route path="/about" element={<About />} /> */}
      {/*<Route path="/portfolio" element={<Portfolio />} /> */}
      {/*<Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
