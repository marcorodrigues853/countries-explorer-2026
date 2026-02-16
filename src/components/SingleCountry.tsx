import { useEffect, useState } from "react";

function SingleCountry() {
  const [country, setCountry] = useState();

  const [countriesList, setCountriesLists] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("pt");

  console.log("Country", country);
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

//   useEffect(() => {
//     console.log(
//       "toda a noite 🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹🇵🇹",
//     );
//   });

  return (
    <div style={{ marginBottom: "5rem" }}>
      <select onClick={(event) => setSelectedCountry(event.target.value)}>
        {countriesList.map((country) => {
          return <option value={country?.cca2}>{country?.name?.common}</option>;
        })}
      </select>

      <div>
        <span>{country?.name?.common}</span>
        <span>{country?.flag}</span>
        <img src={country?.flags?.png} alt="" />
      </div>
    </div>
  );
}

export default SingleCountry;
