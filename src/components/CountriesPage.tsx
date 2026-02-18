import { useEffect, useState } from "react";
import type { ICountry } from "../types/types";
import CountryCard from "./CountryCard";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  console.log("countries", countries);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population",
      );
      const newCountries = await response.json();
      setCountries(newCountries);
    };

    fetchCountries();
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "12px",
      }}
    >
      {countries.map((country) => {
        return (
          <div>
            <CountryCard country={country} />
          </div>
        );
      })}
    </div>
  );
}

export default CountriesPage;
