import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import Quotes from "./components/Quotes";
import RoutinesSection from "./components/RoutinesSection";
import { ThemeType } from "./context/themeContext";
import { useContext, useEffect } from "react";

function App() {
  const { theme, setTheme } = useContext(ThemeType);

  const changeTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <>
      <div className="bg-slate-50 py-8 px-5 w-full max-w-3xl container mx-auto">
        <Header />
        <div className="main-header text-left my-7 space-y-5 px-1 sm:px-8"> 
          <Quotes/>
          <ProgressCard/> 
        </div>
        <RoutinesSection/>
      </div>
    </>
  );
}

export default App;
