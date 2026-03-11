import type { ICountry } from "../../types/country";
import Card from "../Card/Card";
import Chip from "../Chip/Chip";

import styles from "./timezones.module.css";

interface ITimeZones {
  timezones: ICountry["timezones"];
}
function TimeZones({ timezones }: ITimeZones) {
  return (
    <Card>
      <div className={styles.container}>
        <span>
          <strong>Time Zones</strong>
        </span>

        <div className={styles.timezones}>
          {timezones.map((timezone) => (
            <Chip label={timezone} variant="terciary" />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TimeZones;
