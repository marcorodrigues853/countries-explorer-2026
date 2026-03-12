import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import CurrenciesPage from "./pages/CurrenciesPage.tsx";
import CountriesPage from "./pages/CountriesPage.tsx";
import CountryPage from "./pages/CountryPage/CountryPage.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Homepage from "./pages/Homerpage.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NavBar />

        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="currencies" element={<CurrenciesPage />} />

          <Route path="countries">
            <Route index element={<CountriesPage />} />
            <Route path=":name" element={<CountryPage />} />
          </Route>
        </Routes>
      </UserProvider>
      <footer>template footer</footer>
    </BrowserRouter>
  </StrictMode>,
);
