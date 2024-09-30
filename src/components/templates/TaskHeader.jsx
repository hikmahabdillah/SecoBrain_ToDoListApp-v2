import HeadPerSection from "../molecules/HeadPerSection";
import TaskBadge from "../molecules/TaskBadge";

const TaskHeader = () => {
  return (
    <div className="taskHeader space-y-2">
      <div className="flex justify-between items-center gap-4">
        <HeadPerSection>You Have 7 tasks for today</HeadPerSection>
        <TaskBadge
          iconName={"../../taskComplete.svg"}
          numOfTasks={4}
          width="50px"
        />
      </div>
      <div className="flex justify-between items-center gap-4">
        <TaskBadge
          iconName={"../../taskInCompleted.svg"}
          width="35px"
          numOfTasks={3}
        />
        <div className="flex items-center gap-4 [&>span]:duration-300 [&>span]:cursor-pointer">
          <span className="active-tabs">Completed</span>
          <span className="deactive-tabs">Incompleted</span>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
