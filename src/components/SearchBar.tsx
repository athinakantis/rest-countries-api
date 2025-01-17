import { SearchBarProps } from '../services/types'

const SearchBar: React.FC<SearchBarProps> = ({ setSearchterm }) => {

  return (
    <div className="searchbar-container">
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#212325"><path d="M379.69-339.85q-102.01 0-172.77-70.74t-70.76-171.85q0-101.1 70.74-171.84 70.74-70.74 171.99-70.74 101.25 0 171.97 70.74 70.73 70.74 70.73 171.85 0 42.3-14.39 81.84-14.38 39.54-40.53 70.69l239.07 238q7.23 6.94 7.43 17.89.19 10.96-7.43 18.45-7.61 7.48-18.38 7.48-10.76 0-18.08-7.61L530.87-394.1q-29.9 25.86-69.4 40.06-39.51 14.19-81.78 14.19Zm-.41-50.25q80.41 0 136.23-55.96 55.82-55.97 55.82-136.38t-55.82-136.37q-55.82-55.96-136.23-55.96-80.75 0-136.81 55.96t-56.06 136.37q0 80.41 56.06 136.38 56.06 55.96 136.81 55.96Z" /></svg>
      <input type="text" onChange={(e) => setSearchterm(e.target.value)} />
    </div>
  )
}

export default SearchBar