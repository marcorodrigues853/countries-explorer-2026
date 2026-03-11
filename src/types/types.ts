export type ICountries = ICountry[];

export interface ICountry {
  name: { common: string; official: string };
  cca2: string;
  cca3: string;
  capital: [string];
  region: string;
  subregion: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: ILanguages;
  currencies: Currencies;
  continents: string[];
}

export interface ILanguages {
  [key: string]: string;
}

type Currencies = ICurrency;

interface ICurrency {
  [key: string]: { name: string; symbol: string };
}
