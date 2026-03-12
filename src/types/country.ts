export interface ICountry {
  name: IName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string; // TODO: rever
  unMember: boolean;
  currencies: Currencies;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  latlng: Coordinates;
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: Tranlations;
  flag: string;
  maps: Map;
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: Pick<ImagesExtensions, "png" | "svg">;
  startOfWeek: weekDay;
  capitalInfo: { latlng: Coordinates };
  postalCode: { format: string; regex: string };
}

type Currencies = Record<string, { symbol: string; name: string }>;

type Map = {
  googleMaps: string;
  openStreetMaps: string;
};

export interface IName {
  common: string;
  official: string;
  nativeName: {
    [key: string]: { official: string; common: string };
  };
}

type Demonyms = Record<string, { f: string; m: string }>;

type ImagesExtensions = {
  png: string;
  svg: string;
  jpg: string;
  heic: string;
  tif: string;
};

export type Tranlations = Record<string, { official: string; common: string }>;
export type Coordinates = [number, number];
export type weekDay = "monday" | "tuesday" | "so-on";
