const ModalWrapper = ({children}) => {
    // if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-20">
        <div className="relative bg-white p-4 rounded-t-xl shadow-lg w-full h-max">
          <hr className="absolute top-3 rounded-full left-1/2 -translate-x-1/2 w-1/2 border-2 border-gray-400 bg-gray-400"/>
          {children}
        </div>
      </div>
    );
}

export default ModalWrapper;