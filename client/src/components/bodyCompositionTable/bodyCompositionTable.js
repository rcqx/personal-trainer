const BodyCompositionTable = ({ compositions, setBcModal }) => {
  return (
    <div className="w-5/6 h-80 flex flex-col justify-between">
      <h2 className="mb-4 text-xl font-semibold antialiased text-slate-700">
        Body Composition
      </h2>
      <ul className="w-full">
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Age</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.age}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Weight (kg)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.weight} kg
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Height (cm)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.height} cm
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Body Fat (%)
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.bodyFat}%
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Lean Body Mass
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.lbm}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">
            Body Mass Index
          </h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.bmi}
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Waist (cm)</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.waist} cm
          </h3>
        </li>
        <li className="flex justify-between">
          <h3 className="font-light text-slate-600 antialiased">Body Type</h3>
          <h3 className="font-semibold antialiased text-slate-700">
            {compositions[0]?.bodytype}
          </h3>
        </li>
      </ul>
      <button
        className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600
      text-white hover:bg-blue-800 mt-8 w-full"
        onClick={() => setBcModal(true)}
      >
        Update
      </button>
    </div>
  );
};

export default BodyCompositionTable;
