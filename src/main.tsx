import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

import CurrenciesPage from "./pages/CurrenciesPage.tsx";
import CountriesPage from "./components/CountriesPage.tsx";
import CountryPage from "./pages/CountryPage.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="currencies" element={<CurrenciesPage />} />
        <Route path="countries">
          <Route index element={<CountriesPage />} />
          <Route path=":name" element={<CountryPage />} />
        </Route>
      </Routes>

      <footer>template footer</footer>
    </BrowserRouter>
  </StrictMode>,
);
