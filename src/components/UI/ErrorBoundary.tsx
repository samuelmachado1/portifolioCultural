import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">🎯</div>
            <h1>Oops! Algo deu errado</h1>
            <p>
              Parece que houve um problema ao carregar o portfólio.
              Não se preocupe, isso não reflete minha capacidade de produção cultural! 😄
            </p>
            <div className="error-actions">
              <button onClick={this.handleReload} className="retry-button">
                Tentar Novamente
              </button>
              <a
                href="mailto:samuel.estrella@cultura.com"
                className="contact-button"
              >
                Entrar em Contato
              </a>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="error-details">
                <summary>Detalhes técnicos</summary>
                <pre>{this.state.error.stack}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
