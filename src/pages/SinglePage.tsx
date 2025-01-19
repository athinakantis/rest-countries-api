import { Link, useParams } from 'react-router-dom';
import { fetchOneCountry, getBorderCountries } from '../utils/requests';
import { useEffect, useState } from 'react';
import { Country } from '../services/types';
import { formatCurrencies, formatLanguages, formatTLD } from '../utils/formatData';

function SinglePage() {
  const { name } = useParams<string>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (!name) return;

    const getCountry = async (name: string) => {
      const data = await fetchOneCountry(name);
      setCountry(data);

      if (data.borders.length > 0) {
        getBorderCountries(data.borders).then((dataB) => {
          setCountry((prev) => (prev ? { ...prev, borders: dataB } : prev));
        });
      }
    };
    getCountry(name);
  }, [name]);

  return (
    <div className='single-page-country-container'>
      <Link
        to='/'
        id='back'
      >
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
              {country.borders.length > 0 && (
                <div className='border-countries'>
                  <span>Border Countries: </span>
                  {country.borders.map((borderCountry) => (
                    <Link to={`/${borderCountry}`}>{borderCountry}</Link>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
