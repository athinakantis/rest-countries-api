import { useContext } from 'react';
import { ThemeContext } from '../App';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';


function Root() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id='ThemeProvider'>
      <Header />
      <main id={theme}>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
