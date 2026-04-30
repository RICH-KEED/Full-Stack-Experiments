import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = ['Login', 'Register', 'Home', 'Applications', 'Alerts', 'Profile'];

function Header({ activeNav, setActiveNav }) {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'var(--glass)',
        borderColor: 'var(--surface-border)',
        backdropFilter: 'blur(12px)',
        padding: '2rem 1.5rem',
      }}
    >
      {/* Logo — links back to home via React Router */}
      <Link
        to="/"
        className="block text-center no-underline mb-6"
        style={{ textDecoration: 'none' }}
      >
        <h1
          className="font-bold text-3xl"
          style={{
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #fff 0%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          JobFinder
        </h1>
      </Link>

      {/* Nav */}
      <nav className="max-w-3xl mx-auto">
        <ul className="list-none flex justify-center gap-2 flex-wrap">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(link);
                }}
                className="no-underline text-sm font-medium px-4 py-2 rounded transition-all duration-200"
                style={{
                  color: activeNav === link ? 'var(--primary)' : 'var(--text-muted)',
                  background: activeNav === link ? 'var(--primary-glow)' : 'transparent',
                  borderRadius: 'var(--radius-sm)',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  if (activeNav !== link) {
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.background = 'var(--surface-border)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeNav !== link) {
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
