const GoalsTable = ({ goals, setGoalsModal }) => {
  return (
    <div className="w-5/6 h-80 flex flex-col justify-between">
      <h2 className="mb-4 text-xl font-semibold antialiased text-slate-700">
        Trainning Goals
      </h2>
      <ul className="w-full">
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Trainning Focus</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.trainningFocus}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Weight (kg)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.weight} kg
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Body Fat (%)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.bodyFat} %
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Frequency
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.frequency} p/w
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Lean Body Mass
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.lbm}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Body Mass Index
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.bmi}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Flexibility / Mobility</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.flexibility ? "True" : "False"}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Cardio</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {goals[0]?.cardio ? "True" : "False"}
          </h3>
        </li>
      </ul>
      <button
        className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600
      text-white hover:bg-blue-800 mt-8 w-full"
        onClick={() => setGoalsModal(true)}
      >
        Update
      </button>
    </div>
  );
};

export default GoalsTable;
