import HeadPerSection from "./HeadPerSection";
import RoutinesCard from "./RoutinesCard";

const RoutinesSection = () => {
  const routines = [];

  for (let i = 1; i <= 5; i++) {
    routines.push(<RoutinesCard key={i} id={i}/>);
  }
  return (
    <>
      <HeadPerSection>Routines</HeadPerSection>
      <div className="my-4 flex-contain w-full overflow-auto">
        <div className="flex gap-5 items-center justify-between">
          {routines}
        </div>
      </div>
    </>
  )
}

export default RoutinesSection;