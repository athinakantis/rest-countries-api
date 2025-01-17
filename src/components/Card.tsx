import { Country } from '../services/types';
import './Card.css'

function Card({ country }: { country: Country }) {
  const { name, flags, population, region, capital } = country


  return (
    <div className='country-card'>
      <img src={flags.png} alt={name.common} />
      <div className='country-details'>

        <h4>{name.common}</h4>
        <p><span>Population: </span>{population?.toLocaleString().replace('&nbsp', ',')}</p>
        <p><span>Region: </span>{region}</p>
        <p><span>Capital: </span>{capital.length > 1 ? capital.join(', ') : capital[0]}</p>
      </div>
    </div>
  )
}

export default Card;