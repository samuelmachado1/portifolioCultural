import React from 'react';
import './Loading.css';

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = "Carregando portfólio..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-board">
        <div className="loading-house loading-house-1">🎭</div>
        <div className="loading-house loading-house-2">🎨</div>
        <div className="loading-house loading-house-3">🎵</div>
        <div className="loading-path"></div>
      </div>
      <p className="loading-message">{message}</p>
      <div className="loading-subtitle">Samuel Estrella • Produtor Cultural</div>
    </div>
  );
};

export default Loading;
