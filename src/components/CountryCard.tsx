import type { ICountry } from "../types/types";
import Card from "./Card/Card";

import "./countryCard.css";
interface ICountryCard {
  country: ICountry;
}
function CountryCard({ country }: ICountryCard) {
  return (
    <Card> 
      <img src={country.flags.png} alt={country.name.common} />
      <h1>
        <strong>{country.name.common}</strong>
      </h1>

      <div className="info">
        <span>Region: {country.region}</span>
        <span>Capital: {country.capital}</span>
        <span>Population: {country.population}</span>
      </div>
    </Card>
  );
}

export default CountryCard;
