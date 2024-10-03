import { useState } from "react";

const AddTaskBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-dial-init className="fixed right-6 bottom-20 group z-10">
      {/* Menu Buttons */}
      <div
        id="speed-dial-menu-text-outside-button"
        className={`flex flex-col items-center mb-4 space-y-2 transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Button icon={"../../Repeat.svg"} label={"Routines"} />
        <Button icon={"../../TaskAdd.svg"} label={"Task"} />
      </div>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-controls="speed-dial-menu-text-outside-button"
        aria-expanded={isOpen}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full size-16 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        <svg
          className={`size-6 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

const Button = ({ icon, label }) => {
  return (
    <>
      <button
        type="button"
        className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-lg border border-gray-200 hover:text-[#0A26AE] shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none duration-300"
        data-tooltip-target={`tooltip-${label}`} data-tooltip-placement="left"
      >
        <img
          src={icon}
          className="size-7 mx-auto text-blue-400"
          alt=""
         />
        <span className="sr-only">{label}</span>
      </button>

      {/* Tooltip */}
      <div id={`tooltip-${label}`} role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip">
        {label}
        <div className="tooltip-arrow" data-popper-arrow/>
      </div>
    </>
  );
};

export default AddTaskBtn;
