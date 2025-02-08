import { useContext } from 'react';
import { ThemeContext } from '../App';

function Spinner() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext ? themeContext.theme : 'light';

  return <img src={`/src/spinner_${theme}.gif`} alt="Loading..." />
}

export default Spinner;