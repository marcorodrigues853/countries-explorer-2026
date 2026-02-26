import type { ReactNode } from "react";
import "./button.css";

interface IButton {
  variant: "primary" | "secondary";
  children: ReactNode;
  isActive?: boolean;
}
function Button({ variant, children, isActive }: IButton) {
  const classActive = isActive ? "active" : "";
  return <button className={variant + ` ${classActive}`}>{children}</button>;
}
export default Button;
