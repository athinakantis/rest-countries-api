import { Link } from 'react-router-dom';
import { CountrySimplified } from '../services/types';
import './Card.css'

function Card({ country }: { country: CountrySimplified }) {
  const { name, flags, population, region, capital } = country


  return (
    <div className='country-card'>
      <Link to={`/${country.name.common}`}>
        <img src={flags.png} alt={name.common} />
      </Link>
      <div className='country-details'>

        <h4>{name.common}</h4>
        <p><span>Population: </span>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p><span>Region: </span>{region}</p>
        <p><span>Capital: </span>{capital.length > 1 ? capital.join(', ') : capital[0]}</p>
      </div>
    </div>
  )
}

export default Card;