import React, { Suspense } from 'react';
import portfolioData from './data/portfolio';
import Loading from './components/UI/Loading';
import ErrorBoundary from './components/UI/ErrorBoundary';

// Lazy load do componente principal
const Portfolio = React.lazy(() =>
  import('./components/Portfolio/Portfolio').then(module => ({
    default: module.Portfolio
  }))
)

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading message="Preparando seu portfólio..." />}>
        <Portfolio data={portfolioData} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
