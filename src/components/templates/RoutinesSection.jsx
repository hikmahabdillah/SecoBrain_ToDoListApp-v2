import HeadPerSection from "../molecules/HeadPerSection";
import RoutinesCard from "../molecules/RoutinesCard";

const RoutinesSection = () => {
  const routines = [];

  for (let i = 1; i <= 5; i++) {
    routines.push(<RoutinesCard key={i} id={i} />);
  }
  return (
    <section id="routines" className="w-full">
      <HeadPerSection>Routines</HeadPerSection>
      <div className="my-4 flex-contain w-full overflow-auto">
        <div className="flex gap-5 items-center justify-between">
          {routines}
        </div>
      </div>
    </section>
  );
};

export default RoutinesSection;
