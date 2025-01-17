export interface Country {
  cca3: string;
  nativeName: object;
  languages?: object;
  currencies?: object;
  tld?: string[];
  capital?: string[];
  population?: number;
  subregion?: string;
  region?: string;
  flags?: {
    png: string;
    svg: string;
  }
  borders?: string[]
}