import './Card.css'

function Card({ country }) {
  const { name, flags, population, region, capital } = country


  return (
    <div className='country-card'>
      <img src={flags.png} alt={name.common} />
      <div className='country-details'>

        <h4>{name.common}</h4>
        <p><span>Population: </span>{population}</p>
        <p><span>Region: </span>{region}</p>
        <p><span>Capital: </span>{capital.length > 1 ? capital.join(', ') : capital[0]}</p>
      </div>
    </div>
  )
}

export default Card;