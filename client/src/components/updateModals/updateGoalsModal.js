import { IoMdClose } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";

const UpdateGoalsModal = ({ goalsModal, setGoalsModal }) => {
  return (
    <div className="border border-slate-200 shadow-lg w-1/3 h-[73%] rounded-xl flex justify-center bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form className="w-full p-10 flex flex-col justify-between">
        <div
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setGoalsModal(!goalsModal)}
        >
          <IoMdClose size={35} />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-slate-700 text-sm">Trainning Focus</label>
          <input
            type="text"
            className="border border-slate-200 px-2 py-1 rounded-md focus:outline-none w-full"
            placeholder="Weight in Kilograms"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-slate-700 text-sm">Weight (kg)</label>
          <input
            type="number"
            className="border border-slate-200 px-2 py-1 rounded-md focus:outline-none w-full"
            placeholder="Body fat percentage"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-slate-700 text-sm">
            Body Fat (%)
          </label>
          <input
            type="number"
            className="border border-slate-200 px-2 py-1 rounded-md focus:outline-none w-full"
            placeholder="LBM units"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-slate-700 text-sm">
            Frequency
          </label>
          <input
            type="number"
            className="border border-slate-200 px-2 py-1 rounded-md focus:outline-none w-full"
            placeholder="BMI units"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-slate-700 text-sm">
            Lean Body Mass (LBM)
          </label>
          <input
            type="number"
            className="border border-slate-200 px-2 py-1 rounded-md focus:outline-none w-full"
            placeholder="Add your current waist measurement"
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="mb-1 text-slate-700 text-sm">
            Body Mass Index (BMI)
          </label>
          <input
            type="number"
            className="border border-slate-200 px-2 py-1 rounded-md focus:outline-none w-full"
            placeholder="Add your current waist measurement"
          />
        </div>
        <div className="flex items-center">
          <label className="mb-1 text-slate-700 text-start text-sm flex-1 w-1/2">
            Flexibility / Mobility
          </label>
          <input
            type="checkbox"
            className="rounded-md focus:outline-none border border-blue-500 w-1/2"
            placeholder="Add your current waist measurement"
          />
        </div>
        <div className="flex items-center">
          <label className="mb-1 text-slate-700 text-start text-sm flex-1 w-1/2">
            Cardio
          </label>
          <input
            type="checkbox"
            className="rounded-md focus:outline-none border border-blue-500 w-1/2"
            placeholder="Add your current waist measurement"
          />
        </div>
        <button className="rounded-lg py-2 bg-blue-600 text-white flex justify-center items-center">
          <RxUpdate size={20} className="mr-3" />
          Update Goals
        </button>
      </form >
    </div >
  );
};

export default UpdateGoalsModal;
