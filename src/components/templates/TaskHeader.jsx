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
          width="40px"
        />
      </div>
      <div className="flex justify-between items-center gap-4">
        <TaskBadge
          iconName={"../../taskInCompleted.svg"}
          width="25px"
          numOfTasks={3}
        />
        <div className="flex items-center gap-4 [&>span]:duration-300 [&>span]:cursor-pointer">
          <span className="active-tabs">Incompleted</span>
          <span className="deactive-tabs">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
