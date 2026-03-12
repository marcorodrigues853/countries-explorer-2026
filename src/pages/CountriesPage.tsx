import { useContext, useEffect, useState } from "react";
import type { ICountry } from "../types/types";
import CountryCard from "../components/CountryCard";
import { Link } from "react-router";
import "./countriesPage.css";
import { UserContext } from "../context/UserContext";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedRegion, setSelectedregion] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const user = useContext(UserContext);

  console.log("user inside Countries", user);

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

  const regions = countries.map((country) => {
    return country.region;
  });

  const uniqueRegions = [...new Set(regions)];

  const continents = countries.flatMap((country) => country.continents);
  const uniqueContinents = [...new Set(continents)];

  const currencies = countries.flatMap((country) => {
    const hasCurrencies = !!country.currencies;
    const keysOfCurrencies = hasCurrencies
      ? Object.keys(country.currencies)
      : [];
    return keysOfCurrencies;
  });

  const uniqueCurrencies = [...new Set(currencies)];

  console.log("uniqueCurrencies____", uniqueCurrencies);

  // const results = countries.reduce(
  //   (acc, currentCountry) => {
  //     // currentCountry.subregion

  //     if (currentCountry.subregion) {
  //       acc.subRegions[currentCountry.subregion] = currentCountry.subregion;
  //     }

  //     const keysOfCurrencies = Object.keys(currentCountry.currencies);
  //     keysOfCurrencies.forEach((key) => (acc.currencies[key] = key));

  //     // necessito retornar sempre o acumulador
  //     return acc;
  //   },
  //   { currencies: {}, continents: [], regions: [], subRegions: {} },
  // );

  // console.log("results", results);

  const filteredCountries = countries.filter((country) => {
    const searchLowerCase = search.toLowerCase();

    const countryNameLowerCase = country.name.common.toLowerCase();
    const hasNameInSearch = countryNameLowerCase.includes(searchLowerCase);

    const capital = country.capital[0] ?? "";
    const capitalLowerCase = capital.toLowerCase();

    const hasCapitalInSearch = capitalLowerCase.includes(searchLowerCase);

    // novo
    const matchContinentWithSelected =
      country.continents.includes(selectedContinent) || !selectedContinent;

    const matchRegionWithSelected =
      country.region.includes(selectedRegion) || !selectedRegion;

    const hasMatchWithCurrency =
      Object.keys(country.currencies).includes(selectedCurrency) ||
      !selectedCurrency;

    return (
      (hasNameInSearch || hasCapitalInSearch) &&
      matchContinentWithSelected &&
      matchRegionWithSelected &&
      hasMatchWithCurrency
    );
  });

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
        <div>
          <label>regions</label>

          <select
            name="regions"
            id="regions"
            onChange={(event) => setSelectedregion(event.target.value)}
          >
            <option value="">------</option>
            {uniqueRegions.map((region) => {
              return (
                <option value={region} key={region}>
                  {region}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Continents</label>
          <select
            name="continents"
            id="continents"
            onChange={(event) => setSelectedContinent(event.target.value)}
          >
            <option value="" selected={selectedContinent === ""}>
              ------
            </option>
            {uniqueContinents.map((continent) => (
              <option
                value={continent}
                key={continent}
                selected={selectedContinent === continent}
              >
                {continent}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Currencies</label>
          <select
            name="currencies"
            id="currencies"
            onChange={(event) => setSelectedCurrency(event.target.value)}
          >
            <option value="">------</option>
            {uniqueCurrencies.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            setSelectedContinent("");
            setSelectedCurrency("");
            setSelectedregion("");
          }}
        >
          clear
        </button>
        {/* <select name="sub-regions" id="sub-regions">
          {Object.keys(results.subRegions).map((subRegion) => (
            <option value="">{subRegion}</option>
          ))}
        </select> */}
      </div>

      <div className="grid">
        {filteredCountries.map((country) => {
          return (
            <Link to={country.name.common} key={country.cca2}>
              <CountryCard country={country} />
            </Link>
          );
        })}
        {/* 
        {search &&
          filteredCountries.map((country) => {
            return (
              <Link to={country.name.common} key={country.cca2}>
                <CountryCard country={country} />
              </Link>
            );
          })} 
           */}

        {/* {!search &&
          countries.map((country) => {
            return (
              <Link to={country.name.common} key={country.cca2}>
                <CountryCard country={country} />
              </Link>
            );
          })} */}
      </div>
    </div>
  );
}

export default CountriesPage;
