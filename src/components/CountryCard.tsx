import { Link } from "react-router";
import type { ICountry } from "../types/types";

import "./countryCard.css";
interface ICountryCard {
  country: ICountry;
}
function CountryCard({ country }: ICountryCard) {
  return (
    <div className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <h1>
        <strong>{country.name.common}</strong>
      </h1>

      <div className="info">
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
        <span>Population: {country.population}</span>
      </div>
    </div>
  );
}

export default CountryCard;
