
const Modal = ({children, onClose}) => (
  <div className="static">
      <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-90">
       <div className="relative bg-slate-800 rounded p-6 w-10/12 md:w-1/2 lg:w-1/3">
        {children}
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-white">
          X
        </button>
       </div>
    </div>
  </div>
);

export default Modal;
