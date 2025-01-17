import axios from 'axios'
import { Country } from '../services/types'

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,cca3')
  console.log(response.data);
  return response.data;
}

export const fetchOneCountry = async (name: string): Promise<Country> => {
  const response = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${name}?fields=name,population,capital,region,tld,subregion,currencies,languages,borders,cca3,flags`)
  return response.data[0]
}

export function filterCountries(searchterm: string, countries: Country[]): Country[] {
  return countries.filter(country => country.name.common.toLowerCase().includes(searchterm.toLowerCase()))
}

export async function getBorderCountries(borderCountries: string[]): Promise<string[]> {
  const response = await axios.get<string[]>(`https://restcountries.com/v3.1/alpha?codes=${borderCountries.join(',')}&fields=name`)

  return response.data.map(country => country.name.common)
}