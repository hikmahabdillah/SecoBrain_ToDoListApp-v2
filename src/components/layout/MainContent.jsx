import RoutinesSection from "../templates/RoutinesSection";
import TaskSection from "../templates/TaskSection";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center">
      <RoutinesSection/>
      <TaskSection/>
    </div>
  )
}

export default MainContent;