import { ThemeType } from './context/themeContext';
import { useContext, useEffect } from 'react';

function App() {
  const { theme, setTheme } = useContext(ThemeType);

  const changeTheme = () => {
    setTheme(!theme);
    console.log(theme);
  }

  useEffect(() => {
    theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [theme])

  return (
    <>
    <h1>Hello World!</h1>
    </>
  )
}

export default App
