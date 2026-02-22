import { useEffect, useState } from "react";
import type { ICountry } from "../types/country";
import { useParams } from "react-router";

function SingleCountry() {
  let params = useParams();
  console.log("params", params);
  const [countriesList, setCountriesLists] = useState<ICountry[]>([]);
  const [country, setCountry] = useState<ICountry>();
  const [selectedCountry, setSelectedCountry] = useState("es");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${selectedCountry}`,
      );
      const newCountry = await response.json();
      console.log("newCountry", selectedCountry, newCountry);
      setCountry(newCountry[0]);
    };

    fetchCountries();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2",
      );
      const newCountriesList = await response.json();
      console.log("newCountriesList", newCountriesList);
      setCountriesLists(newCountriesList);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(
  //     "toda a noite 🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹",
  //   );
  // });

  return (
    <div style={{ marginBottom: "5rem" }}>
      {countriesList.length > 0 && (
        <select
          onChange={(event) => {
            setSelectedCountry(event.target.value);
          }}
        >
          {countriesList.map((country) => {
            return (
              <option key={country.cca2} value={country.cca2}>
                {country.name.official}
              </option>
            );
          })}
        </select>
      )}
      {country && <h1>LOADING....</h1>}
      {country && (
        <div>
          <span>{country.name.common}</span>
          <span>{country.flag}</span>
          <img src={country.flags.png} alt="" />
        </div>
      )}
    </div>
  );
}

export default SingleCountry;

const name = "Carla";
const idade = 18;
console.log(`A ${name}} tem a idade de ${idade} `);
