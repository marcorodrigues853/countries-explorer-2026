import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import Chip from "../../components/Chip/Chip";

import styles from "./ContryPage.module.css";

import type { ICountry } from "../../types/country";
import SectionDetail from "../../components/SectionDetail/SectionDetail";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import BordersList from "../../components/BordersList/BordersList";

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
  }, [name]);

  return (
    country && (
      <>
        <section id="section-info" className={styles.info}>
          <div className={styles["country"]}>
            <span>
              <strong>{country?.name.common}</strong>
            </span>
            <span>{country?.name.official}</span>
            <div className={styles["chips-container"]}>
              <Chip label={String(country.continents)} variant="primary" />
              <Chip label={String(country.subregion)} variant="secondary" />
              <Chip label={String(country.region)} variant="terciary" />
            </div>
          </div>

          <img src={country?.flags.png} width={"400px"} />
        </section>
        <section id={styles["section-detail"]}>
          {/* <div className={styles.details}>
            <div className={styles.cards}>
              <InfoCard label="Population" value={String(country.population)} />
              <InfoCard label="Area" value={country.area} />
              <InfoCard label="Capital" value={country.capital[0]} />
              <InfoCard
                label="Currency"
                value={Object.values(country.currencies)[0].name}
              />
            </div>
            <Languages languages={country.languages} />
            <TimeZones timezones={country.timezones} />
          </div> */}
          <SectionDetail
            population={country.population}
            area={country.area}
            capital={country.capital}
            currencies={country.currencies}
            languages={country.languages}
            timezones={country.timezones}
          />
          <div className={styles.actions}>
            <Card>
              <h1>Coat of Arms</h1>
              <img src={country.coatOfArms.png} width={"400px"} />
            </Card>

            <Card>
              {/* <span>Border Countries</span>
              <div className={styles["border-countries"]}>
                {country.borders?.map((border) => (
                  <Link to={`/countries/portugal`} key={border}>
                    <Button variant="primary">{border}</Button>
                  </Link>
                ))}
              </div> */}
              <BordersList borderCountryCodes={country.borders} />
            </Card>

            <Card>
              <span>Location</span>
              <div>
                <p>Latitude: {country.latlng[0]}</p>
                <p>Longitude: {country.latlng[1]}</p>
              </div>
            </Card>
          </div>
        </section>
      </>
    )
  );
}

export default CountryPage;
