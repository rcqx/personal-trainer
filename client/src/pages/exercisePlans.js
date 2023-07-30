import { useEffect, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import Modal from "../components/createWorkout/modal";
import { getWorkOutForm } from "../api/exerciseForm";
import ExercisePlan from "../components/exercisePlan/exercisePlan";

const ExercisePlans = () => {
  const [modal, setModal] = useState(false);
  const [plans, setPlans] = useState([]);

  const showModal = () => {
    setModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWorkOutForm();
        setPlans(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="justify-between items-center m-[0_auto] max-w-7xl">
        <div className="flex justify-between items-center border-b antialiased border-slate-200 h-[6em]">
          <h1 className="font-[Newsreader] text-5xl">Exercise Plans</h1>
          <button
            className="font-[Inter] flex justify-center 
          items-center py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800"
            onClick={showModal}
          >
            <AiOutlineFileAdd size={20} className="mr-2" />
            A New Plan
          </button>
        </div>
        <div>
          <h2 className="text-start text-lg font-semibold py-5">{`Workouts (${plans.length})`}</h2>
          <div className="workout-cards py-2 flex justify-start items-center gap-5 mb-20">
            {plans.map((item, index) => {
              return (
                <ExercisePlan key={index + 1} item={item} index={index} />
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        modal={modal}
        onClose={() => setModal(false)}
        title={"Plan information"} />
    </div >
  );
};

export default ExercisePlans;
