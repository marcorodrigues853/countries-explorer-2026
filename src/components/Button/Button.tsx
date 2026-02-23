import type { ReactNode } from "react";
import "./button.css";

interface IButton {
  variant: "primary" | "secondary";
  children: ReactNode;
}
function Button({ variant, children }: IButton) {
  return <button className={variant}>{children}</button>;
}
export default Button;
