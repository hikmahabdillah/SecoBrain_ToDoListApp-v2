import TaskCard from "../molecules/TaskCard";

const TaskAndTime = ({isToday}) => {
  return (
    <li className={`mb-5 ${isToday && "ms-4"} text-left`}>
    <div className="flex items-center gap-2">
    <div className={`${isToday ? "absolute bg-[#0A26AE] -start-1.5" : "bg-gray-500"} w-3 h-3 rounded-full border border-white`} />
    <span className={`text-sm font-semibold font-poppins leading-none ${isToday ? "text-[#0A26AE]" : "text-gray-500" }`}>
      07:00 AM
    </span>
    </div>
    <TaskCard />
  </li>
  )
}

export default TaskAndTime;