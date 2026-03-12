import { useState } from "react";
import { UserContext, type IUserProvider } from "./UserContext";

export function UserProvider({ children }: IUserProvider) {
  // Pode-se adicionar lógica para alterar o user futuramente
  const [user, setUser] = useState({
    name: "Marco",
    photo:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/346.jpg ",
    country: "Portugal",
    currency: "USD",
  });

  function changeUser() {
    setUser({
      name: "batatas",
      photo: "https://via.placeholder.com/40",
      country: "E OREUTRUETer",
      currency: `${Math.random().toFixed(2)} GBP`,
    });
  }

  return (
    <UserContext.Provider value={{ setUser, user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}
