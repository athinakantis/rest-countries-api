import { createSlice } from '@reduxjs/toolkit';
import { Country } from '../services/types';
import {
  fetchAllCountries,
  fetchBorderCountries,
  fetchOneCountry,
  fetchRegionalCountries,
} from '../utils/requests';

interface InitialState {
  allCountries: Partial<Country>[] | undefined;
  regionalCountries: Partial<Country>[] | undefined;
  filteredCountries: Partial<Country>[] | undefined;
  borderCountries: string[] | undefined;
  singleCountry: Country | null
}

const initialState: InitialState = {
  allCountries: [],
  regionalCountries: [],
  filteredCountries: [],
  borderCountries: [],
  singleCountry: null
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    filterCountries: (state, action) => {
      const { searchterm, filter } = action.payload;
      if (searchterm && filter != 'Filter by region') {
        state.filteredCountries = state.regionalCountries?.filter((country) =>
          country.name?.common.toLowerCase().includes(searchterm.toLowerCase())
        );
      } else if (searchterm && filter === 'Filter by region')
        state.filteredCountries = state!.allCountries!.filter((country) =>
          country.name?.common.toLowerCase().includes(searchterm.toLowerCase())
        );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.allCountries = action.payload;
    }),
      builder.addCase(fetchRegionalCountries.fulfilled, (state, action) => {
        state.regionalCountries = action.payload;
      }),
      builder.addCase(fetchOneCountry.fulfilled, (state, action) => {
        state.singleCountry = action.payload;
      }),
      builder.addCase(fetchBorderCountries.fulfilled, (state, action) => {
        state.borderCountries = action.payload;
      });
  },
});

export const { filterCountries } = countrySlice.actions
export default countrySlice.reducer;
