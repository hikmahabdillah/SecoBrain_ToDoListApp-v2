import Header from "../templates/Header";
import ProgressCard from "../templates/ProgressCard";
import Quotes from "../templates/Quotes";

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
