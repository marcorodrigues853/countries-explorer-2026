import { createContext, type ReactNode } from "react";

export type User = {
  name: string;
  photo: string;
  country: string;
  currency: string;
};

export const defaultUser: User = {
  name: "Utilizador",
  photo: "https://via.placeholder.com/40",
  country: "Portugal",
  currency: "EUR",
};

export const UserContext = createContext<User>(null);

export interface IUserProvider {
  children: ReactNode;
}

// export const UserProvider: FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   // Pode-se adicionar lógica para alterar o user futuramente
//   return (
//     <UserContext.Provider value={defaultUser}>{children}</UserContext.Provider>
//   );
// };
