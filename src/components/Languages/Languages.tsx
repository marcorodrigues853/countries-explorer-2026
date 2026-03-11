import type { ICountry } from "../../types/types";
import Card from "../Card/Card";
import Chip from "../Chip/Chip";
import styles from "./languages.module.css";

interface ILanguages {
  languages: ICountry["languages"];
}

function Languages({ languages }: ILanguages) {
  const languagesNames = Object.values(languages);
  console.log("languagesNames", languagesNames);
  return (
    <Card>
      <div className={styles.container}>
        <span style={{ textAlign: "left" }}>
          <strong>Languages</strong>
        </span>
        <div className={styles.containerLanguages}>
          {languagesNames.map((languageName) => (
            <Chip key={languageName} label={languageName} variant="secondary" />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Languages;
