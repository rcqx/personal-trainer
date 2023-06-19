import Nav from "../components/Nav";
import mockImage from "../assets/cardio.jpg"

const ExercisePlans = () => (
  <div className="border border-red-600 h-screen">
    <Nav />
    <div className="border border-blue-600 justify-between items-center m-[0_auto] max-w-7xl h-[600px]">
      <div className="flex justify-between items-center h-1/6 border-b border-slate-400">
        <h1 className="font-[Newsreader] text-6xl">Exercise Plans</h1>
        <button
          className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
        >
          A New Plan
        </button>
      </div>
      <div className="border border-red-600 h-5/6">
        <h2 className="text-start text-lg font-semibold py-5">Routines (1)</h2>
        <div className="workout-cards border border-green-600">
          <div className="w-[30%] border border-slate-200 shadow-md rounded-3xl overflow-hidden cursor-pointer">
            <img src={mockImage} />
            <div className="px-4 py-6 bg-[#FAFAF5]">
              <h3 className="text-start font-semibold">Endurance January 2023</h3>
              <h3 className="text-start font-semibold text-green-700">Completed</h3>
              <p className="text-start text-sm text-slate-600">Improve Cardiovascular performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExercisePlans;
