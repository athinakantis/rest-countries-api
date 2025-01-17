import { useMemo, useRef, useState } from 'react';
import Card from '../components/Card';
import { Country, Filter } from '../services/types';
import SearchBar from '../components/SearchBar';
import { fetchAllCountries, filterCountries } from '../utils/requests';

function List() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchterm, setSearchterm] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('Filter by region');
  const allCountries = useRef<undefined | Country[]>()

  const filters = ['Filter by region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useMemo(() => {
    if (!allCountries.current) {
      return fetchAllCountries().then((data) => {
        setCountries(data)
        allCountries.current = data
      });
    }
    if (searchterm) {
      return setCountries(filterCountries(searchterm, allCountries.current))
    }
    setCountries(allCountries.current)
  }, [searchterm]);

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
            {filters.slice(1).map((f) => (
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
          countries.map((country: Country) => (
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
