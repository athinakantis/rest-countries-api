import axios from 'axios';
import { Country, BorderCountry } from '../services/types';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchAllCountries = createAsyncThunk(
  '/countries/fetchAllCountries',
  async () => {
    const response = await axios.get<Partial<Country>[]>(
      'https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags'
    );
    return response.data;
  }
);

export const fetchRegionalCountries = createAsyncThunk(
  '/countries/fetchRegionalCountries',
  async (region: string) => {
    const response = await axios.get<Partial<Country>[]>(
      `https://restcountries.com/v3.1/region/${region}?fields=name,population,capital,region,flags`
    );
    return response.data;
  }
);

export const fetchOneCountry = createAsyncThunk(
  '/countries/fetchOneCountry',
  async (name: string) => {
    const response = await axios.get<Country[]>(
      `https://restcountries.com/v3.1/name/${name}?fields=name,population,capital,region,tld,subregion,currencies,languages,borders,cca3,flags`
    );
    return response.data[0];
  }
);

export const fetchBorderCountries = createAsyncThunk(
  '/countries/fetchBorderCountries',
  async (borderCountries: string[]): Promise<string[]> => {
    const response = await axios.get<BorderCountry[]>(
      `https://restcountries.com/v3.1/alpha?codes=${borderCountries.join(
        ','
      )}&fields=name`
    );
    return response.data.map((country) => country.name.common);
  }
);
