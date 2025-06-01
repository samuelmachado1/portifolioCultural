import React, { useState, useEffect } from 'react';
import './DebugPanel.css';

interface DebugPanelProps {
  isVisible?: boolean;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({ isVisible = false }) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [isOpen, setIsOpen] = useState(isVisible);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = () => {
    if (screenSize.width <= 480) return 'Mobile Small';
    if (screenSize.width <= 768) return 'Mobile';
    if (screenSize.width <= 1024) return 'Tablet';
    return 'Desktop';
  };

  const getAnimationStatus = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return prefersReducedMotion ? 'Reduced Motion' : 'Full Animations';
  };

  if (!isOpen) {
    return (
      <button
        className="debug-toggle"
        onClick={() => setIsOpen(true)}
        title="Abrir painel de debug"
      >
        🐛
      </button>
    );
  }

  return (
    <div className="debug-panel">
      <div className="debug-header">
        <h3>Debug Panel</h3>
        <button
          className="debug-close"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </div>

      <div className="debug-content">
        <div className="debug-section">
          <h4>Screen Info</h4>
          <p><strong>Size:</strong> {screenSize.width} × {screenSize.height}</p>
          <p><strong>Breakpoint:</strong> {getBreakpoint()}</p>
          <p><strong>DPR:</strong> {window.devicePixelRatio}</p>
        </div>

        <div className="debug-section">
          <h4>Animations</h4>
          <p><strong>Status:</strong> {getAnimationStatus()}</p>
          <p><strong>Cards Visible:</strong> {Math.floor(screenSize.width / 320)}</p>
        </div>

        <div className="debug-section">
          <h4>Performance</h4>
          <p><strong>User Agent:</strong> {navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'}</p>
          <p><strong>Touch:</strong> {'ontouchstart' in window ? 'Supported' : 'Not Supported'}</p>
        </div>

        <div className="debug-section">
          <h4>Test Actions</h4>
          <button
            className="debug-button"
            onClick={() => {
              const cards = document.querySelectorAll('.timeline-card');
              cards.forEach((card, index) => {
                (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
                card.classList.remove('timeline-card');
                setTimeout(() => card.classList.add('timeline-card'), 10);
              });
            }}
          >
            Replay Animations
          </button>

          <button
            className="debug-button"
            onClick={() => {
              const container = document.querySelector('.timeline-container');
              if (container) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
          >
            Reset Scroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebugPanel;
