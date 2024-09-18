import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button class="dark:bg-slate-50 dark:text-neutral-800 text-slate-50 bg-neutral-800" onClick={changeTheme}>
          {theme ? 'Dark Theme' : 'Light Theme'} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
