export interface Country {
  cca3: string;
  id: Country['cca3'];
  name: {
    common: string;
    nativeName: NativeName
  };
  languages: object;
  currencies: Currency;
  tld: string[];
  capital: string[];
  population: number;
  subregion: string;
  region: string;
  flags: {
    png: string;
    svg: string;
  };
  borders: string[];
}

interface NativeName {
  language: {
    official: string;
    common: string;
  }
}

export interface Currency {
  currency: {
    name: string;
    symbol: string;
  }
}

export interface CountrySimplified {
  name: {
    common: string;
  };
  population: number;
  capital: string[];
  region: string;
  flags: {
    png: string;
    svg: string;
  },
  cca3: string;
  id: CountrySimplified['cca3'],
  borders: string[];
}

export interface BorderCountry {
  name: {
    common: string;
  }
}

export type Theme = 'light' | 'dark';

export interface SearchBarProps {
  setSearchterm: (searchterm: string) => void;
}

export type Filter =
  | 'Filter by region'
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania';
