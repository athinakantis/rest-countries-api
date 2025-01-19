import axios from 'axios';
import { Country, CountrySimplified, BorderCountry } from '../services/types';

export const fetchAllCountries = async (): Promise<CountrySimplified[]> => {
  const response = await axios.get<CountrySimplified[]>(
    'https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags'
  );
  return response.data;
};

export const fetchOneCountry = async (name: string): Promise<Country> => {
  const response = await axios.get<Country[]>(
    `https://restcountries.com/v3.1/name/${name}?fields=name,population,capital,region,tld,subregion,currencies,languages,borders,cca3,flags`
  );
  return response.data[0];
};

export function filterCountries(
  searchterm: string,
  countries: CountrySimplified[]
): CountrySimplified[] {
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchterm.toLowerCase())
  );
}

export async function getBorderCountries(
  borderCountries: string[]
): Promise<string[]> {
  const response = await axios.get<BorderCountry[]>(
    `https://restcountries.com/v3.1/alpha?codes=${borderCountries.join(
      ','
    )}&fields=name`
  );

  return response.data.map((country) => country.name.common);
}

export const fetchByRegion = async (region: string): Promise<CountrySimplified[]> => {
  const response = await axios.get<CountrySimplified[]>(
    `https://restcountries.com/v3.1/region/${region}?fields=name,population,capital,region,flags`
  );
  return response.data;
};
