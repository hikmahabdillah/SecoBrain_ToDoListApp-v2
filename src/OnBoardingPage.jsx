import { Link } from "react-router-dom";

const OnBoardingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#008DDA] to-[#0028F1] w-full min-h-screen p-5 text-slate-50">
        <div className="content flex flex-col items-center justify-center">
          <img src="./onBoardingLogo.png" alt="" width="90px" />
          <img src="./Illustration.png" alt="" width="350px" />
          <div className="greetings space-y-2 mb-5">
            <h1 className="text-2xl font-semibold text-center max-w-[300px]">
              Organize Your Life, One Task at a Time
            </h1>
            <p className="max-w-[300px] font-normal">
              Welcome to my to-do list application, where simplicity meets
              efficiency. With our user-friendly interface.
            </p>
          </div>
          <Link className="text-slate-50 bg-[#041980] py-2 px-6 rounded-2xl" to="/">
            Continue {"->"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default OnBoardingPage;
