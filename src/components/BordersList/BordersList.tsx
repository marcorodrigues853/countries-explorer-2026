import { useEffect, useState } from "react";
import type { ICountry } from "../../types/country";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { Link } from "react-router";

// por | mar |spa
type CountryCodes = { borderCountryCodes: ICountry["borders"] };

// POR MAR
function BordersList({ borderCountryCodes }: CountryCodes) {
  const [countries, setCountries] = useState<ICountry[]>([]);

  console.log("countries", countries);

  useEffect(() => {
    // https://restcountries.com/v3.1/alpha?fields=name&codes=borderCountryCodes

    const fetchCountriesByBorderCountryCodes = async () => {
      const joinedCodes = borderCountryCodes.join();
      // tranasform  por,mar
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?fields=name&codes=${joinedCodes}`,
      );

      const newCountries = await response.json();

      
      setCountries(newCountries);
    };
    fetchCountriesByBorderCountryCodes();
  }, [borderCountryCodes]);

  return (
    <Card>
      {countries.map((country) => (
        <Link to={`/countries/${country.name.common}`}>
          <Button variant={"primary"}>{country.name.common}</Button>
        </Link>
      ))}
    </Card>
  );
}

export default BordersList;
