import { MdOutlineAdd } from "react-icons/md";

const CreateWorkout = () => (

  <div className="flex justify-center items-center">
    <form
      className="w-full rounded-md flex flex-col justify-around"
    >
      <div className="flex flex-col mb-3">
        <label className="text-start text-sm pb-1">Name</label>
        <input className="p-2 border border-slate-200 rounded-md" placeholder="Enter a plan name" />
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-start pb-1 text-sm">Objective</label>
        <input className="p-2 border border-slate-200 rounded-md" placeholder="What's your main goal?" />
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-start pb-1 text-sm">Body Composition</label>
        <select className="p-2 bg-white border border-slate-200 rounded-md">
          <option>Body Composition 1</option>
          <option>Body Composition 2</option>
        </select>
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-start pb-1 text-sm">Fitness Goal</label>
        <select className="p-2 bg-white border border-slate-200 rounded-md">
          <option>Goals option 1</option>
          <option>Goals option 2</option>
        </select>      </div>
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
);

export default CreateWorkout;
