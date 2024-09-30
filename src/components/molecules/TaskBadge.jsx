const TaskBadge = ({numOfTasks, iconName, width}) => {
  return (
    <div className="flex items-center gap-2">
      <img src={iconName} alt="" width={width}/>
      <p className="text-neutral-800 text-lg font-semibold">{numOfTasks}</p>
    </div>
  )
}

export default TaskBadge;