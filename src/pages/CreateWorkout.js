import { MdOutlineAdd } from "react-icons/md";

const CreateWorkout = () => (
  <div>
    <div className="justify-between items-center m-[0_auto] max-w-7xl">
      <div className="flex justify-between items-center border-b antialiased border-slate-200 h-[6em]">
        <h1 className="font-[Newsreader] text-5xl">Create a new exercise plan</h1>
      </div>
      <div className="flex justify-center items-center">
        <form
          className="border border-slate-200 shadow-md w-[40em] py-10 px-14 rounded-md flex flex-col justify-around"
        >
          <div className="flex flex-col mb-2">
            <label className="text-start pb-1">Plan Name</label>
            <input className="p-2 border border-slate-200 rounded-md" placeholder="Enter a plan name" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-start pb-1">Main Objective</label>
            <input className="p-2 border border-slate-200 rounded-md" placeholder="Enter a plan name" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-start pb-1">Body Composition</label>
            <input className="p-2 border border-slate-200 rounded-md" placeholder="Enter a plan name" />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-start pb-1">Fitness Goal</label>
            <input className="p-2 border border-slate-200 rounded-md" placeholder="Enter a plan name" />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="font-[Inter] border border-blue-600 py-2 px-8 rounded-md bg-blue-600 text-white 
              hover:bg-blue-800 flex justify-center items-center"
            >
              <MdOutlineAdd className="mr-1" />
              Create Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default CreateWorkout;
