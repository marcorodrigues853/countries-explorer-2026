import styles from "./chip.module.css";

function Chip({
  label,
  variant,
}: {
  label: string;
  variant: "primary" | "secondary" | "terciary";
}) {
  return (
    <div className={`${styles.chip} ${styles[variant]}`}>
      <span>{label}</span>
    </div>
  );
}

export default Chip;
