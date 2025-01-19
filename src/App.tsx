import { createContext, useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import { Theme } from './services/types';
import { themes } from './utils/data';

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);


function App() {
  const [theme, setTheme] = useState<Theme>(
    (JSON.parse(localStorage.getItem('theme') as string) as Theme) || 'light'
  );
  const root = document.querySelector('html') as HTMLElement;

  useEffect(() => {
    for (const variable in themes[theme]) {
      root.style.setProperty(variable, themes[theme][variable])
    }
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
