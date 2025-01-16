import { useMemo, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

function List() {
  const [countries, setCountries] = useState<object[]>([])

  useMemo(() => {
    const fetchAllCountries = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags,cca3')
      console.log(response.data),
      setCountries(response.data)
    }

    const fetchOneCountry = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/name/france?fields=name,population,capital,region,tld,subregion,currencies,languages,borders,cca3,flags')
      setCountries(response.data)
    }
    
    fetchOneCountry()
  }, [])

  return (
    <>
    {countries.length > 0 && countries.map((country: object) => <Card key={country?.cca3} country={country} />)}
    </>
  )
}

export default List;