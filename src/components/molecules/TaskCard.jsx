const TaskCard = () => {
  return (
    <div className="mt-2 flex items-center justify-between py-3 px-5 rounded-lg border gap-5 border-neutral-300 text-neutral-800 cursor-pointer">
      <div className="task-content leading-none">
        <h2 className="font-poppins font-semibold text-lg">Workout</h2>
        <p className="font-poppins text-sm">Lorem ipsum dolor sit amet</p>
      </div>
      <input
        id="1"
        type="checkbox"
        className="size-5 text-blue-600 bg-gray-200 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2"
      />
    </div>
  )
}

export default TaskCard;