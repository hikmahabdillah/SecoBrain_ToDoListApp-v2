const RoutinesCard = ({ id }) => {
  return (
    <span className="px-4 py-3 border border-neutral-300 rounded-lg flex items-center [&>*]:cursor-pointer">
      <input
        id={`routines-${id}`}
        type="checkbox"
        className="size-5 text-blue-600 bg-gray-200 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2"
      />
      <label
        htmlFor={`routines-${id}`}
        className="ml-2 font-poppins text-md font-semibold text-gray-900"
      >
        Workout
      </label>
    </span>
  );
};

export default RoutinesCard;
