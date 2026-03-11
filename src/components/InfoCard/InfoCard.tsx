import Card from "../Card/Card";

import styles from "./infoCard.module.css";

interface IInfoCard {
  label: string;
  value: string | number;
}

function InfoCard({ label, value }: IInfoCard) {
  return (
    <Card>
      <div className={styles.container}>
        <h3>{label}</h3>
        <h2>{value}</h2>
      </div>
    </Card>
  );
}

export default InfoCard;
