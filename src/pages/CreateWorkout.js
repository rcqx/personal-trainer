const CreateWorkout = () => (
  <div>
    <div className="justify-between items-center m-[0_auto] max-w-7xl">
      <div className="flex justify-between items-center border-b antialiased border-slate-200 h-[6em]">
        <h1 className="font-[Newsreader] text-5xl">Create a new exercise plan</h1>
      </div>
      <div className="border border-blue-600 flex justify-center">
        <form className="border border-red-600 w-1/2">
          <div className="flex flex-col border border-red-600">
            <label className="text-start">Plan Name</label>
            <input placeholder="Enter a name for you plan.." />
          </div>
          <div className="flex flex-col border border-red-600">
            <label className="text-start">Main Objective</label>
            <input placeholder="Enter a name for you plan.." />
          </div>
          <div className="flex flex-col border border-red-600">
            <label className="text-start">Select Body Composition</label>
            <input placeholder="Enter a name for you plan.." />
          </div>
          <div className="flex flex-col border border-red-600">
            <label className="text-start">Select goals</label>
            <input placeholder="Enter a name for you plan.." />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default CreateWorkout;
