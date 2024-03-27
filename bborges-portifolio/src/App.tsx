import './App.scss'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header.tsx';
import { AppRoutes } from './routes/AppRoutes.tsx';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}