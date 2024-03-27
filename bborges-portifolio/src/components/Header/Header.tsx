import './header.scss';
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
    { title: 'Home', url: '/' },
    { title: 'Portifólio', url: '/portifolio' },
    { title: 'Sobre', url: '/sobre' },
    { title: 'Contato', url: '/contato' }
  ];

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/" className="logo-link">
          <img src="src/assets/bb-logo.svg" alt="Bruna Borges logo" className="logo" />
          <div className='logo-name'>
            Bruna Borges
          </div>
        </Link>
        <div>
          <ul className='nav-list'>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}