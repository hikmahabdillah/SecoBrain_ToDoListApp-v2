import { useState, useEffect } from "react";

const PopupConfirm = ({type, isDanger}) => {
  const [textAlert, setTextAlert] = useState('');

  useEffect(() => {
    switch (type) {
      case 'task':
        setTextAlert('Are you sure you want to delete this task?');
        break;
      case 'alltasks':
        setTextAlert('Are you sure you want to delete All completed tasks?');
        break;
      case 'notifications':
        setTextAlert('Are you sure you want to delete all notifications?');
        break;
      case 'routines':
        setTextAlert('Are you sure you want to delete this routines?');
        break;
      default:
        setTextAlert('Alert!');
    }
  }, [type]);
  
  return (
    <div className="mt-10 max-w-[350px] p-4 rounded-xl border border-grey-300">
      <span className="block w-max ml-auto text-black">
      <svg
          className="size-6 transition-transform rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
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
      </span>

       <div className="flex flex-col justify-center items-center gap-3 text-neutral-800">
         <img src={`${isDanger ? "../../Danger.svg" : "../../Warning.svg"}`} width="50px" alt="icon"/>
         <h1 className="text-base font-semibold text-center w-[85%]">
           {textAlert}
         </h1>
         <div className="flex items-center gap-3 font-semibold text-sm">
          <button type="button" className={`text-slate-50 px-5 py-3 rounded-lg ${isDanger ? "bg-red-500" : "bg-yellow-500"}`}>Yes, I'm Sure</button>
          <button type="button" className="text-neutral-800 px-5 py-3 rounded-lg border border-grey-400">Cancel</button>
          </div>
       </div>
    </div>
  )
}

export default PopupConfirm;