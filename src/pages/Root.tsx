import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../App';
import Header from '../components/Header';
import { Theme } from '../services/types';
import { ThemeContextType } from '../App';


function Root() {
  const { theme } = useContext<ThemeContextType | null>(ThemeContext);


  return (
    <div id='ThemeProvider'>
      <Header />
      <main id={theme}>
        <div className='content-container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Root;
