export interface Country {
  cca3: string;
  id: Country['cca3'];
  name: {
    common: string;
  }
  languages?: object;
  currencies?: object;
  tld?: string[];
  capital?: string[];
  population?: number;
  subregion?: string;
  region?: string;
  flags: {
    png: string;
    svg: string;
  }
  borders: string[]
}



export interface SearchBarProps {
  setSearchterm: (searchterm: string) => void;
}

export type Filter = 'Filter by region' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';