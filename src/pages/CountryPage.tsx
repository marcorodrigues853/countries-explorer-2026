import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
import type { ICountry } from "../types/types";

function CountryPage() {
  // get name of country from URL
  const { name } = useParams();


  // fetch dinâmico utilizando o param do URL

  const [country, setCountry] = useState<ICountry>();

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`,
      );

      const newCountry = await response.json();

      setCountry(newCountry[0]);
    };

    fetchCountry();
  }, []);

  return country && <CountryCard country={country} />;
}

export default CountryPage;
