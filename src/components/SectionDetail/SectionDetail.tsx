import { useContext } from "react";
import type { ICountry } from "../../types/country";
import InfoCard from "../InfoCard/InfoCard";
import Languages from "../Languages/Languages";
import TimeZones from "../Timezones/Timezones";
import styles from "./section.module.css";
import { UserContext } from "../../context/UserContext";
import UserInfo from "../NavBar/UserInfo";

type Details = Pick<
  ICountry,
  "population" | "area" | "capital" | "currencies" | "languages" | "timezones"
>;

function SectionDetail({
  population,
  area,
  capital,
  currencies,
  languages,
  timezones,
}: Details) {
  const { user } = useContext(UserContext);

  console.log("user inside Section details", user);
  return (
    <div className={styles.details}>
      <UserInfo user={user} />
      <div className={styles.cards}>
        <InfoCard label="Population" value={String(population)} />
        <InfoCard label="Area" value={area} />
        <InfoCard label="Capital" value={capital[0]} />
        <InfoCard label="Currency" value={Object.values(currencies)[0].name} />
      </div>
      <Languages languages={languages} />
      <TimeZones timezones={timezones} />
    </div>
  );
}

export default SectionDetail;
