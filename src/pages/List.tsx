import { useMemo, useRef, useState } from 'react';
import Card from '../components/Card';
import { CountrySimplified, Filter } from '../services/types';
import SearchBar from '../components/SearchBar';
import { fetchAllCountries, fetchByRegion, filterCountries } from '../utils/requests';
import { filters } from '../utils/data';

function List() {
  const [countries, setCountries] = useState<CountrySimplified[]>([]);
  const [searchterm, setSearchterm] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('Filter by region');
  const allCountries = useRef<undefined | CountrySimplified[]>()

  useMemo(() => {
    if (!allCountries.current) {
      return fetchAllCountries().then((data) => {
        setCountries(data)
        allCountries.current = data
      });
    }

    if (filter !== 'Filter by region') {
      return fetchByRegion(filter).then(data => setCountries(data))
    }

    if (searchterm) {
      return setCountries(filterCountries(searchterm, allCountries.current))
    }
    setCountries(allCountries.current)
  }, [searchterm, filter]);

  return (
    <div className='content-container'>
      <div className='search-filter-container'>
        <SearchBar setSearchterm={setSearchterm} />

        <div className="filter-container">

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
        {countries.length > 0 &&
          countries.map((country: CountrySimplified) => (
            <Card
              key={country.id}
              country={country}
            />
          ))}
      </div>
    </div>
  );
}

export default List;
