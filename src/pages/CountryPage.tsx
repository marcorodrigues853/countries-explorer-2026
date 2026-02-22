import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
import type { ICountry } from "../types/types";

function CountryPage() {
  // get name of country from URL
  const { name } = useParams();

  console.log("params", name);

  // fetch dinâmico utilizando o param do URL

  const [country, setCountry] = useState<ICountry>();
  console.log("country____zzzz", country);

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`,
      );

      const newCountry = await response.json();
      console.log("newCountry", newCountry);
      setCountry(newCountry[0]);
    };

    fetchCountry();
  }, []);

  return country && <CountryCard country={country} />;
}

export default CountryPage;
