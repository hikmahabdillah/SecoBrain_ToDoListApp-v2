import HeadPerSection from "../molecules/HeadPerSection";
import TaskContent from "./TaskContent";
import TaskHeader from "./TaskHeader";

const TaskSection = () => {
  return (
    <section id="task" className="w-full flex flex-col gap-5">
      <TaskHeader/>
      <TaskContent/>
      <HeadPerSection>Next Day</HeadPerSection>
      <TaskContent/>
    </section>
  )
}

export default TaskSection;