import { useEffect, useState } from "react";
import type { ICountry } from "../types/types";
import CountryCard from "../components/CountryCard";
import { Link } from "react-router";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string>("");

  const filteredCountries = countries.filter((country) => {
    const countryNameLowerCase = country.name.common.toLocaleLowerCase();
    const searchLowerCase = search.toLocaleLowerCase();
    return countryNameLowerCase.includes(searchLowerCase);
  });

  console.log("filteredCountries", filteredCountries);

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
    <div>
      <label>search: </label>
      <input
        type="text"
        placeholder="search a country"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
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
