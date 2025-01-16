import { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'
export const ThemeContext : any = createContext(null)

function App() {
  const [theme, setTheme] = useState<string>(JSON.parse(localStorage.getItem('theme')) || 'light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
