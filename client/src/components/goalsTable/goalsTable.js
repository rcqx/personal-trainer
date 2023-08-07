import { AiFillDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";

const GoalsTable = ({ goal, setGoalsModal, index }) => {
  console.log("GOALS=>", goal);

  return (
    <div className="w-1/3 flex flex-col justify-between p-5 border border-slate-100 mr-3 last:mr-0 shadow-md">
      <h2 className="mb-4 text-xl font-semibold antialiased text-slate-700">
        {`Training Goal ${index + 1}`}
      </h2>
      <ul className="w-full">
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Training Focus</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.trainingFocus}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Weight (kg)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.weight} kg
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Body Fat (%)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.bodyFat} %
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Frequency
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.frequency} p/w
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Lean Body Mass
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.lbm}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Body Mass Index
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.bmi}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Flexibility / Mobility</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.flexibility ? "True" : "False"}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Cardio</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goal?.cardio ? "True" : "False"}
          </h3>
        </li>
      </ul>
      <div className="flex gap-3">
        <button
          className="font-[Inter] py-2 px-4 rounded-md bg-blue-600 flex justify-center items-center
      text-white mt-8 w-full hover:bg-red-500"
        >
          <AiFillDelete className="mr-2" size={20} />
          Delete
        </button>

      </div>
    </div>
  );
};

export default GoalsTable;
