import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Country, Filter } from '../services/types';
import { filterCountries } from '../store/countrySlice';
import { RootState } from '../store/store';
import { filters } from '../utils/data';
import { fetchAllCountries, fetchRegionalCountries } from '../utils/requests';

function List() {
  const [searchterm, setSearchterm] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('Filter by region');
  const [countries, setCountries] = useState<Partial<Country>[] | undefined>(
    []
  );
  const { allCountries, regionalCountries, filteredCountries } = useAppSelector(
    (state: RootState) => state.countries
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (filter !== 'Filter by region') {
      dispatch(fetchRegionalCountries(filter));
    }

    if (searchterm) {
      dispatch(filterCountries({ searchterm, filter }))
    } else {
      dispatch(fetchAllCountries());
    }
  }, [dispatch, filter, searchterm]);

  useEffect(() => {
    if (searchterm) {
      setCountries(filteredCountries)
    } else if (!searchterm && filter !== 'Filter by region') {
      setCountries(regionalCountries)
    } else {
      setCountries(allCountries)
    }
  }, [allCountries, regionalCountries, filteredCountries, filter, searchterm]);

  return (
    <>
      <div className='search-filter-container'>
        <SearchBar setSearchterm={setSearchterm} />

        <div className='filter-container'>
          <select
            className='regionFilter'
            value={filter}
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            {filters.map((f) => (
              <option
                key={f}
                value={f}
              >
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='countries-container'>
        {countries?.map((country) => (
          <Card
            key={country.id}
            country={country}
          />
        ))}
      </div>
    </>
  );
}

export default List;
