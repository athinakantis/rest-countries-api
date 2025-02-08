import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Country } from '../services/types';
import { formatCurrencies, formatLanguages, formatTLD } from '../utils/formatData';
import { fetchOneCountry } from '../utils/requests';

function SinglePage() {
  const { name } = useParams<string>();
  const [country, setCountry] = useState<Country | null>(null);

  const { borderCountries, singleCountry } = useAppSelector((state) => state.countries)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!name) return;

    dispatch(fetchOneCountry(name))
    setCountry(singleCountry)
  }, [name]);

  return (
    <div className='single-page-country-container'>
      <Link
        to='/'
        id='back'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>

        Back
      </Link>
      <div className='single-page-country'>
        {country && (
          <>
            <img
              src={country.flags.png}
              alt={country.name.common}
            />
            <div className='country-details-container'>
              <h4>{country.name.common}</h4>
              <div className='country-details'>
                <div className="country-details-1">
                  <p><span>Native Name: </span>{(Object.values(country.name.nativeName)[0]).common}</p>
                  <p><span>Population: </span>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  <p><span>Region: </span>{country.region}</p>
                  <p><span>Sub Region: </span>{country.subregion}</p>
                  <p><span>Capital: </span>{country.capital.join(', ')}</p>
                </div>
                <div className="country-details-2">
                  {formatTLD(country.tld)}
                  {formatCurrencies(country.currencies)}
                  {formatLanguages(country.languages)}
                </div>

              </div>
              <p>
                <span>Border Countries: </span>
                {country.borders.length > 0 ? (
                  <div className='border-countries'>

                    {country.borders.map((borderCountry) => (
                      <Link key={borderCountry} to={`/${borderCountry}`}>{borderCountry}</Link>
                    ))}
                  </div>
                ) : 'No Neighbouring Countries'}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
