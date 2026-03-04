import { useEffect, useState } from "react";
import type { ICountry } from "../types/types";
import CountryCard from "../components/CountryCard";
import { Link } from "react-router";
import "./countriesPage.css";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>("");

  const regions = countries.map((country) => {
    return country.region;
  });
  const uniqueRegions = [...new Set(regions)];

  const continents = countries.flatMap((country) => country.continents);
  const uniqueContinents = [...new Set(continents)];

  const results = countries.reduce(
    (acc, currentCountry) => {
      // currentCountry.subregion

      if (currentCountry.subregion) {
        acc.subRegions[currentCountry.subregion] = currentCountry.subregion;
      }

      const keysOfCurrencies = Object.keys(currentCountry.currencies);
      keysOfCurrencies.forEach((key) => (acc.currencies[key] = key));

      // necessito retornar sempre o acumulador
      return acc;
    },
    { currencies: {}, continents: [], regions: [], subRegions: {} },
  );

  console.log("results", results);

  const filteredCountries = countries.filter((country) => {
    const searchLowerCase = search.toLowerCase();

    const countryNameLowerCase = country.name.common.toLowerCase();
    const hasNameInSearch = countryNameLowerCase.includes(searchLowerCase);

    const capital = country.capital[0] ?? "";
    const capitalLowerCase = capital.toLowerCase();

    const hasCapitalInSearch = capitalLowerCase.includes(searchLowerCase);

    return hasNameInSearch || hasCapitalInSearch;
  });

  console.log("filteredCountries", filteredCountries);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,continents,currencies,subregion",
      );
      const newCountries = await response.json();
      setCountries(newCountries);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <label>search: </label>
      <input
        type="text"
        placeholder="search a country"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <div className="filters">
        <select name="regions" id="regions">
          {uniqueRegions.map((region) => {
            return <option value="">{region}</option>;
          })}
        </select>
        <select name="continents" id="continents">
          {uniqueContinents.map((continent) => (
            <option value="">{continent}</option>
          ))}
        </select>
        <select name="currencies" id="currencies">
          {Object.keys(results.currencies).map((currency) => (
            <option value="">{currency}</option>
          ))}
        </select>
        <select name="sub-regions" id="sub-regions">
          {Object.keys(results.subRegions).map((subRegion) => (
            <option value="">{subRegion}</option>
          ))}
        </select>
      </div>

      <div className="grid">
        {search &&
          filteredCountries.map((country) => {
            return (
              <Link to={country.name.common}>
                <CountryCard country={country} />
              </Link>
            );
          })}
        {!search &&
          countries.map((country) => {
            return (
              <Link to={country.name.common}>
                <CountryCard country={country} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default CountriesPage;
