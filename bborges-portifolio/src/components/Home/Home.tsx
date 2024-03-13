import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  links: {
    title: string;
    url: string;
  }[];
}

export const Header: React.FC<HeaderProps> = () => {
  const links = [
    { title: 'Home', url: '/home' },
    { title: 'Portifólio', url: '/portifolio' },
    { title: 'Sobre', url: '/sobre' },
    { title: 'Contato', url: '/contato' }
  ];

  return (
    <header className='header'>
      <nav className='nav'>
      <Link to="/home" className="logo-link">
        <div className='logo'>
          Bruna Borges
        </div>
      </Link>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}