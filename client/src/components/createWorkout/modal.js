import CreateWorkout from "./createWorkout";
const Modal = ({ modal, onClose, title }) => {
  return (
    <div
      id="modal"
      className={`z-50 absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center ${modal ? 'opactiy-100' : 'opacity-0 pointer-events-none h-0'
        }`}
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
      onKeyDown={onClose}
      tabIndex={0}
      role="button"
    >
      <div
        id="modal-content"
        className={`absolute w-[95%] md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-10 rounded-lg transform transition-all ease-out duration-300 ${modal ? 'translate-y-0' : 'translate-y-[50px]'
          }`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        tabIndex={0}
        role="button"
      >
        <div id="modal-header" className="m-0">
          <h3 className="text-center text-lg font pb-6">
            {title}
          </h3>
        </div>
        <div id="modal-body">
          <CreateWorkout />
        </div>
      </div>
    </div>
  );
};

export default Modal;
