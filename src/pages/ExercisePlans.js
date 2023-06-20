import cardio from "../assets/cardio.jpg"
import strength from "../assets/weights.jpg"
import multi from "../assets/crossfit.jpg"
import { AiOutlineFileAdd } from "react-icons/ai";
import Footer from "../components/Footer";

const ExercisePlans = () => (
  <div className="flex flex-col justify-between">
    <div className="justify-between items-center m-[0_auto] max-w-7xl">
      <div className="flex justify-between items-center border-b antialiased border-slate-200 h-[6em]">
        <h1 className="font-[Newsreader] text-5xl">Exercise Plans</h1>
        <button
          className="font-[Inter] flex justify-center 
          items-center py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
        >
          <AiOutlineFileAdd size={20} className="mr-2" />
          A New Plan
        </button>
      </div>
      <div>
        <h2 className="text-start text-lg font-semibold py-5">Routines (1)</h2>
        <div className="workout-cards py-2 flex justify-between items-center gap-5 mb-20">
          <div className="w-1/3 border border-slate-200 shadow-md rounded-3xl overflow-hidden cursor-pointer">
            <img src={cardio} alt="thumbnail" />
            <div className="px-4 py-6 bg-[#FAFAF5]">
              <h3 className="text-start font-semibold">Marathon Prep Plan 2023</h3>
              <h3 className="text-start font-semibold text-green-700">Completed</h3>
              <p className="text-start text-sm text-slate-600">Improve Cardiovascular performance</p>
            </div>
          </div>
          <div className="w-1/3 border border-slate-200 shadow-md rounded-3xl overflow-hidden cursor-pointer">
            <img src={strength} alt="thumbnail" />
            <div className="px-4 py-6 bg-[#FAFAF5]">
              <h3 className="text-start font-semibold">Hypertrophy Fall-Summer Plan 2023</h3>
              <h3 className="text-start font-semibold text-amber-600">In progress</h3>
              <p className="text-start text-sm text-slate-600">Improve Cardiovascular performance</p>
            </div>
          </div>
          <div className="w-1/3 border border-slate-200 shadow-md rounded-3xl overflow-hidden cursor-pointer">
            <img src={multi} alt="thumbnail" />
            <div className="px-4 py-6 bg-[#FAFAF5]">
              <h3 className="text-start font-semibold">Cutting Summer Plan 2023</h3>
              <h3 className="text-start font-semibold text-blue-00">Start</h3>
              <p className="text-start text-sm text-slate-600">Improve Cardiovascular performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div >
);

export default ExercisePlans;
