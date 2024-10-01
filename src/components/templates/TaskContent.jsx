import TaskAndTime from "./TaskAndTime";

const TaskContent = () => {
  const tasksList = [];

  for (let i = 1; i <= 5; i++) {
    tasksList.push(<TaskAndTime key={i} />);
  }
  return (
    <div className="task-content p-2 max-h-[300px] h-full overflow-auto relative">
    {/* <div className="gradient-overlay" /> */}
      <ol className="relative border-s border-gray-300 ">
        {tasksList}
      </ol>
    </div>
  );
};

export default TaskContent;
