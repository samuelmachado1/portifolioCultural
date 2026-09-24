import React, { Suspense } from "react";
import portfolioData from "./data/portfolio";
import Loading from "./components/UI/Loading";
import ErrorBoundary from "./components/UI/ErrorBoundary";
import { useRoute } from "./utils/routes";

const Portfolio = React.lazy(() =>
  import("./components/Portfolio/Portfolio").then((module) => ({
    default: module.Portfolio,
  }))
);

const CadastroPage = React.lazy(() =>
  import("./components/Register/CadastroPage").then((module) => ({
    default: module.CadastroPage,
  }))
);

function App() {
  const route = useRoute();
  const isCadastro = route === "/cadastro";

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading message={isCadastro ? "Abrindo o cadastro..." : "Preparando seu portfólio..."} />}>
        {isCadastro ? <CadastroPage data={portfolioData} /> : <Portfolio data={portfolioData} />}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
