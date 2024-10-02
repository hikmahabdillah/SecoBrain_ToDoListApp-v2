import RoutinesCard from "../molecules/RoutinesCard";

const RoutinesContent = () => {
  const routines = [];

  for (let i = 1; i <= 5; i++) {
    routines.push(<RoutinesCardTime key={i} id={i} />);
  }
  return (
    <>
    <div className="flex gap-5 items-center justify-between w-full relative">
      {routines}
    </div>
    {/* <ol className="flex items-center w-full gap-5">
    </ol> */}
    </>
  );
};

const RoutinesCardTime = ({id}) => {
  return(
    <span className="flex flex-col gap-2 items-start">
      <RoutinesTimes/>
      <RoutinesCard id={id}/>
    </span>
  )
}

const RoutinesTimes = () => {
  return (
      <span className="rounded-b-lg px-2 py-1 bg-blue-800 text-xs">
        07:00 AM
      </span>
  );
};

export default RoutinesContent;
