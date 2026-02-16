import { useEffect, useState } from "react";

function ContriesList() {
  // gaveta onde guarda os dados
  const [countries, setCountries] = useState([]);

  console.log("countries", countries);
  useEffect(() => {
    console.log("dependências vazias");

    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,cca2,currencies",
      );
      const newCountries = await response.json();
      console.log("newCountries", newCountries);
      setCountries(newCountries);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("el festivaleiroprimo do toy,  ");
  });

  return (
    <div>
      <div style={{ display: "grid", gap: "16px" }}>
        {countries.map((country) => (
          <div
            style={{
              border: "1px solid #333",
              padding: "1rem",
            }}
          >
            <h1>{country.name.official}</h1>
            <img src={country.flags.png} alt="" />

            <div>{country.cca2}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContriesList;
