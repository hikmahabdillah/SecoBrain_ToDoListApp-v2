const ProgressCircle = ({percentage}) => {
   // Count circumFerence
   const circumference = 2 * Math.PI * 40;

   // Hitung strokeDashoffset berdasarkan persentase
   const strokeDashoffset = circumference - (circumference * (percentage / 100));

  return (
    <div className="relative size-24 flex items-center justify-center">
    <svg className="w-full h-full transform p-1 -rotate-90" viewBox="0 0 100 100">
      {/* <!-- Background circle (gray) --> */}
      <circle
        cx="50"
        cy="50"
        r="40%"
        strokeWidth="10"
        className="text-gray-300"
        fill="transparent"
        stroke="currentColor"
      />
      {/* <!-- Progress circle (blue) --> */}
      <circle
        cx="50"
        cy="50"
        r="40%"
        strokeWidth="11"
        className="text-blue-600"
        fill="transparent"
        stroke="currentColor"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </svg>
    {/* <!-- Percentage text in the middle --> */}
    <div className="absolute text-xl font-bold text-blue-600">67%</div>
  </div>
  )
}

export default ProgressCircle;