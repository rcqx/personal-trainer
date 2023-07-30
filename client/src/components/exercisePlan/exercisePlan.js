import cardio from "../../assets/cardio.jpg"
import { useDispatch, useSelector } from "react-redux";
import { setSelectedWorkoutForm } from "../../redux/features/ptstore";

const ExercisePlan = ({ item }) => {
  const dispatch = useDispatch();
  const selectedForm = useSelector((state) => state.ptStore.selectedWorkoutForm);

  console.log(selectedForm);

  return (
    <div
      className="w-1/3 border border-slate-200 shadow-md 
    rounded-3xl overflow-hidden cursor-pointer"
      onClick={() => {
        dispatch(setSelectedWorkoutForm(item));
      }}
    >
      <img src={cardio} alt="thumbnail" />
      <div className="px-4 py-6 bg-[#FAFAF5]">
        <h3 className="text-start font-semibold">{item.planName}</h3>
        <h3 className="text-start font-semibold text-green-700">{item.status[0].toUpperCase() + item.status.slice(1)}</h3>
        <p className="text-start text-sm text-slate-600">{item.objective[0].toUpperCase() + item.objective.slice(1)}</p>
      </div>
    </div>
  );
};

export default ExercisePlan;
