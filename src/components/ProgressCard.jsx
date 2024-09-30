const ProgressCard = () => {
  return (
    <>
      <div className="card flex items-center gap-3 sm:gap-5 py-5 px-2 sm:px-4 rounded-xl border border-neutral-300 shadow-md">
      <div className="relative size-24 flex items-center justify-center">
  <svg className="w-full h-full transform p-1 -rotate-90">
    {/* <!-- Background circle (gray) --> */}
    <circle cx="50%" cy="50%" r="40%" strokeWidth="10" className="text-gray-300" fill="transparent" stroke="currentColor"/>
    {/* <!-- Progress circle (blue) --> */}
    <circle cx="50%" cy="50%" r="40%" strokeWidth="11" className="text-blue-600" fill="transparent" stroke="currentColor" 
            strokeDasharray="283" strokeDashoffset="93" strokeLinecap="round"/>
  </svg>
  {/* <!-- Percentage text in the middle --> */}
  <div className="absolute text-xl font-bold text-blue-600">
    67%
  </div>
</div>
        <div className="progress-text font-poppins text-left space-y-1 text-neutral-800 font-semibold [&>h2]:text-[1.35rem] sm:[&>h2]:text-2xl [&>p]:text-md sm:[&>p]:text-lg">
          <h2>Weekly Progress</h2>
          <p><span className="text-[#0A26AE] text-lg">9/17</span> Tasks completed</p>
        </div>
      </div>
    </>
  )
}

export default ProgressCard;