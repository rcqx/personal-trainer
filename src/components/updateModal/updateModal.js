import { IoMdClose } from "react-icons/io";

const UpdateModal = ({ bcModal, setBcModal }) => {
  return (
    <div className="border-2 border-black w-1/3 h-1/2 rounded-xl flex justify-center bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form className="border border-red-600 w-full p-10">
        <div
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setBcModal(!bcModal)}
        >
          <IoMdClose size={35} />
        </div>
        <div className="flex flex-col">
          <label>Test</label>
          <input type="text" className="border border-slate-800" />
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
