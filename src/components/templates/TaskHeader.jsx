import { useState } from "react";
import HeadPerSection from "../molecules/HeadPerSection";
import TaskBadge from "../molecules/TaskBadge";

const TaskHeader = () => {
  const [isCompletedTab, setIsCompletedTab] = useState(false); // Rename state for clarity

  const toggleTabs = () => {
    setIsCompletedTab((prevTab) => !prevTab);
  };

  return (
    <div className="taskHeader space-y-2">
      {/* Header with tasks summary */}
      <div className="flex justify-between items-center gap-4">
        <HeadPerSection>You Have 7 tasks for today</HeadPerSection>
        <TaskBadge
          iconName={"../../taskComplete.svg"}
          numOfTasks={4}
          width="40px"
        />
      </div>

      {/* Tasks status and tab switching */}
      <div className="flex justify-between items-center gap-4">
        <TaskBadge
          iconName={"../../taskInCompleted.svg"}
          width="25px"
          numOfTasks={3}
        />
        <div className="flex items-center gap-4 cursor-pointer">
          <button
            type = "button"
            className={`duration-300 ${
              isCompletedTab ? "deactive-tabs" : "active-tabs"
            }`}
            onClick={toggleTabs}
            aria-pressed={!isCompletedTab} // Aksesibilitas untuk menunjukkan status tab
          >
            Incompleted
          </button>
          <button
            type = "button"
            className={`duration-300 ${
              isCompletedTab ? "active-tabs" : "deactive-tabs"
            }`}
            onClick={toggleTabs}
            aria-pressed={isCompletedTab} // Aksesibilitas untuk menunjukkan status tab
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
