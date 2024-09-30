import Header from "./components/Header";
import ProgressCard from "./components/ProgressCard";
import TextGradient from "./components/TextGradient";
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
          <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-900 w-full max-w-xs sm:max-w-md">Let{"'"}s Improve Your Habits to<TextGradient moveGradient="bg-gradient-to-l">{" "}next level</TextGradient></h2>
          <ProgressCard/> 
        </div>
      </div>
    </>
  );
}

export default App;
