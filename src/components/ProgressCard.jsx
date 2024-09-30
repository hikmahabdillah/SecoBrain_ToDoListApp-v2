import HeadPerSection from "./HeadPerSection";
import ProgressCircle from "./ProgressCircle";

const ProgressCard = () => {
  return (
    <>
      <div className="card flex items-center gap-3 sm:gap-5 py-3 px-2 sm:px-4 rounded-xl border border-neutral-300 shadow-md">
        <ProgressCircle percentage={67}/>
        <div className="progress-text font-poppins text-left space-y-1 text-neutral-800 font-semibold [&>p]:text-md sm:[&>p]:text-lg">
          <HeadPerSection>Weekly Progress</HeadPerSection>
          <p>
            <span className="text-[#0A26AE] text-lg">9/17</span> Tasks completed
          </p>
        </div>
      </div>
    </>
  );
};

export default ProgressCard;
