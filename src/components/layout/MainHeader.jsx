import Header from "../templates/Header";
import ProgressCard from "../templates/ProgressCard";
import TextGradient from "../molecules/TextGradient";

const Quotes = () => {
  return(
    <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-900 w-full max-w-xs sm:max-w-md">Let{"'"}s Improve Your Habits to<TextGradient moveGradient="bg-gradient-to-l">{" "}next level</TextGradient></h2>
  )
}

const MainHeader = () => {
  return (
    <>
      <Header />
      <div className="main-header text-left my-7 space-y-5 px-1 sm:px-8">
        <Quotes />
        <ProgressCard />
      </div>
    </>
  );
};

export default MainHeader;
