import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './context/themeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/detail-recipes/:id" element={<DetailRecipes />} /> */}
      </Routes>
    </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
)
