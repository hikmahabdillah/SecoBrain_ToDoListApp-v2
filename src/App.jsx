import MainContent from "./components/layout/MainContent";
import MainHeader from "./components/layout/MainHeader";
import AddTaskBtn from "./components/molecules/AddTaskBtn";
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
        <MainHeader/>
        <MainContent/>
        <AddTaskBtn/>
      </div>
    </>
  );
}

export default App;
