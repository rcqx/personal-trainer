import { useSelector } from "react-redux";

const PlanInfo = () => {
  const selectedWorkout = useSelector((state) => state.ptStore.selectedWorkoutForm);

  return (
    <>
      {selectedWorkout.length !== 0 && (
        <div className="flex justify-center items-center gap-3 flex-col" >
          <div className="flex flex-col items-start w-full h-[16em] justify-between">
            <div className="flex flex-col items-start border border-slate-100 rounded-lg p-4 shadow-md w-full">
              <h1 className="text-sm font-bold text-slate-600 ">Name</h1>
              <h1 className="text-slate-800">{selectedWorkout.planName}</h1>
            </div>
            <div className="flex flex-col items-start border border-slate-100 rounded-lg p-4 shadow-md w-full">
              <h1 className="text-sm font-bold text-slate-600 ">Objective</h1>
              <h1 className="text-slate-800">{selectedWorkout.objective}</h1>
            </div>
            <div className="flex flex-col items-start border border-slate-100 rounded-lg p-4 shadow-md w-full">
              <h1 className="text-sm font-bold text-slate-600 ">Status</h1>
              <h1 className="text-green-600 font-semibold">{selectedWorkout.status[0].toUpperCase() + selectedWorkout.status.slice(1)}</h1>
            </div>
          </div>
          <div className="border border-slate-100 rounded-lg shadow-md flex p-4 flex-col items-start w-full overflow-auto">
            <h1 className="text-sm font-bold text-slate-600 pb-2">Goals</h1>
            <div className="w-full flex flex-wrap gap-1 items-center justify-start">
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">Weight</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.weight} Kg</h2>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">Bodyfat</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.bodyFat} %</h2>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">Frequency</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.frequency} d/w</h2>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">LBM</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.lbm}</h2>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">BMI</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.bmi}</h2>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">Stretching</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.flexibility && "Yes"}</h2>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] py-2 border-2 border-blue-500 rounded-md">
                <h1 className="text-xs text-slate-600 mr-2">Cardio</h1>
                <h2 className="text-sm">{selectedWorkout.fitnessGoal.cardio && "Yes"}</h2>
              </div>
            </div>
          </div>
          <button
            className="font-[Inter] border border-blue-600 py-2 px-4 
            rounded-md bg-blue-600 text-white hover:bg-blue-800"
          >
            View Workout
          </button>
        </div >
      )}
    </>
  );
}

export default PlanInfo;
