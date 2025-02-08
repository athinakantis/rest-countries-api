import { useContext } from 'react';
import { SearchBarProps } from '../services/types';
import { ThemeContext } from '../App';

const SearchBar: React.FC<SearchBarProps> = ({ setSearchterm }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext ? themeContext.theme : 'light';

  return (
    <div className='searchbar-container'>
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill={`${theme === 'light' ? '#000000' : '#FFFFFF'}`}><path d="M377.07-321.46q-110.27 0-186.74-76.52-76.47-76.52-76.47-185.35 0-108.84 76.52-185.36 76.53-76.52 185.69-76.52 109.17 0 185.36 76.52 76.19 76.52 76.19 185.46 0 43.71-13.61 83.02-13.6 39.3-39.47 72.32l234.41 233.15q11.02 10.97 11.02 27.16 0 16.2-11.1 27.22-11.11 11.18-27.38 11.18t-27-11.18l-233.66-233.5q-29.76 24.52-69.28 38.46-39.52 13.94-84.48 13.94Zm-.61-75.75q77.44 0 131.42-54.44 53.98-54.44 53.98-131.68 0-77.25-54-131.69-54.01-54.44-131.4-54.44-77.94 0-132.39 54.44-54.45 54.44-54.45 131.69 0 77.24 54.42 131.68 54.43 54.44 132.42 54.44Z" /></svg>
      <input
        type='text'
        onChange={(e) => setSearchterm(e.target.value)}
        placeholder='Search for a country...'
      >

      </input>
    </div>
  );
};

export default SearchBar;
