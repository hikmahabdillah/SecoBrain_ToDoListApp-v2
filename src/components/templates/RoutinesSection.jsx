import HeadPerSection from "../molecules/HeadPerSection";
import RoutinesContent from "./RoutinesContent";

const RoutinesSection = () => {
  return (
    <section id="routines" className="w-full">
      <HeadPerSection>Routines</HeadPerSection>
      <div className="mt-2 mb-10 flex-contain w-full overflow-auto border-t border-t-blue-600">
          <RoutinesContent/>
      </div>
    </section>
  );
};

export default RoutinesSection;
