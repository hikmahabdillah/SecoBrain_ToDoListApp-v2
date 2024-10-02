import TaskAndTime from "./TaskAndTime";

const TaskContent = ({isToday}) => {
  const tasksList = [];

  for (let i = 1; i <= 3; i++) {
    tasksList.push(<TaskAndTime isToday={isToday} key={i} />);
  }
  return (
    <div className={`task-content p-2 ${isToday ? "max-h-[500px]" : "max-h-[350px]" } h-full overflow-auto relative`}>
    {/* <div className="gradient-overlay" /> */}
      <ol className={`relative ${isToday && "border-s"} border-gray-300`}>
        {tasksList}
      </ol>
    </div>
  );
};

export default TaskContent;
