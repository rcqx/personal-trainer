import { useEffect, useState } from "react";
import cardio from "../assets/cardio.jpg"
import { AiOutlineFileAdd } from "react-icons/ai";
import Modal from "../components/createMealPlan/modal";
import { getMealPlan } from "../api/mealPlan";

const MealPlans = () => {
  const [modal, setModal] = useState(false);
  const [plans, setPlans] = useState([]);

  const showModal = () => {
    setModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMealPlan();
        setPlans(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(plans);

  return (
    <div className="flex flex-col justify-between">
      <div className="justify-between items-center m-[0_auto] max-w-7xl w-full">
        <div className="flex justify-between items-center border-b antialiased border-slate-200 h-[6em]">
          <h1 className="font-[Newsreader] text-5xl">Create a Meal Plan</h1>
          <button
            className="font-[Inter] flex justify-center 
          items-center py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
            onClick={showModal}
          >
            <AiOutlineFileAdd size={20} className="mr-2" />
            New Meal Plan
          </button>
        </div>
        <div>
          <h2 className="text-start text-lg font-semibold py-5">{`Routines (${plans.length})`}</h2>
          <div className="workout-cards py-2 flex justify-between items-center gap-5 mb-20">
            {plans.map((item) => {
              return (
                <div className="w-1/3 border border-slate-200 shadow-md rounded-3xl overflow-hidden cursor-pointer">
                  <img src={cardio} alt="thumbnail" />
                  <div className="px-4 py-6 bg-[#FAFAF5]">
                    <h3 className="text-start font-semibold">{item.planName}</h3>
                    <h3 className="text-start font-semibold text-green-700">{item.status[0].toUpperCase() + item.status.slice(1)}</h3>
                    <p className="text-start text-sm text-slate-600">{item.objective[0].toUpperCase() + item.objective.slice(1)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        modal={modal}
        onClose={() => setModal(false)}
        title="Plan information" />
    </div >
  );
};

export default MealPlans;
