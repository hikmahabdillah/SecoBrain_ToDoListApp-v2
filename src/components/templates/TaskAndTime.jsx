import TaskCard from "../molecules/TaskCard";

const TaskAndTime = () => {
  return (
    <li className="mb-5 ms-4 text-left">
    <div className="absolute w-3 h-3 bg-[#0A26AE] rounded-full -start-1.5 border border-white dark:border-[#0A26AE]" />
    <span className="mb-1 text-sm font-semibold font-poppins leading-none text-[#0A26AE]">
      07:00 AM
    </span>
    <TaskCard />
  </li>
  )
}

export default TaskAndTime;