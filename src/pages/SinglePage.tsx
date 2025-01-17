import { useParams } from 'react-router-dom';
import { fetchOneCountry, getBorderCountries } from '../utils/requests';
import { useEffect, useState } from 'react';
import { Country } from '../services/types';

function SinglePage() {
  const { name } = useParams<string>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    if (!name) return;

    fetchOneCountry(name)
      .then((data) => {
        setCountry(data);

        return getBorderCountries(data.borders);
      })
      .then((dataB) => {
        setCountry((prev) =>
          prev ? { ...prev, borders: dataB } : prev
        );
      })
  }, []);



  return (
    <div className='single-page-country-container'>
      <button id='back'>Back</button>
      <div className='single-page-country'>

        {country && (
          <>
            <img
              src={country.flags.png}
              alt={country.name.common}
            />
            <div className='country-details-container'>
              <h4>{country.name.common}</h4>
              <div className='country-details'></div>
              <div className="border-countries">
                <span>Border Countries: </span>
                {country.borders?.map(borderCountry => <button key={borderCountry}>{borderCountry}</button>)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SinglePage;
