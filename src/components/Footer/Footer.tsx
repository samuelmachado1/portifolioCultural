import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p className="footer-text">
          Desenvolvido por <span className="footer-highlight">Samuel Machado</span>
        </p>
        <div className="footer-tech">
          <span className="tech-badge">React</span>
          <span className="tech-separator">•</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-separator">•</span>
          <span className="tech-badge">Vite</span>
        </div>
        <p className="footer-copyright">
          © {currentYear} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
