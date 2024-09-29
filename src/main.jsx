import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './context/themeContext.jsx';
import OnBoardingPage from './OnBoardingPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/getStarted" element={<OnBoardingPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
)
