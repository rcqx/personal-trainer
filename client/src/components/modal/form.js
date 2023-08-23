import { useForm } from "react-hook-form";
import axios from 'axios';

const CreateTrainningGoalForm = ({ onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const URL = "http://localhost:8080/api/create-goals";
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const formData = {
      trainingFocus: data.trainingFocus,
      weight: data.weight,
      bodyFat: data.bodyFat,
      frequency: data.trainingFrequency,
      lbm: data.lbm,
      bmi: data.bmi,
      flexibility: data.streching,
      cardio: data.cardio,
    }
    axios.post(URL, formData, config).then(() => window.location.reload())
      .catch(() => alert("There was a problem"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
      <label className="text-sm mb-1">Training Focus</label>
      <select {...register("trainingFocus", { required: true })} defaultValue={""} className="bg-white border border-slate-200 p-2 w-full mb-2">
        <option value="" disabled>Select a type</option>
        <option value="gainMuscle">Gain muscle</option>
        <option value="burnFat">Burn Fat</option>
        <option value="strength">Strength</option>
        <option value="aerobic">Aerobic</option>
      </select>

      <label className="text-sm mb-1">Weight (kg)</label>
      <input {...register("weight", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <label className="text-sm mb-1">Body Fat Percentage (%)</label>
      <input {...register("bodyFat", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <label className="text-sm mb-1">Training Frequency</label>
      <select {...register("trainingFrequency", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2">
        <option value="2">Twice per week</option>
        <option value="3">Trice per week</option>
        <option value="4">Four days per week</option>
        <option value="5">Five days per week</option>
        <option value="6">Six days per week</option>
      </select>

      <label className="text-sm mb-1">Lean Body Mass</label>
      <input {...register("lbm", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <label className="text-sm mb-1">Body Mass Index</label>
      <input {...register("bmi", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <div className="mb-2">
        <label className="text-sm mb-1">Cool-Down Stretches?</label>
        <input {...register("streching")} type="checkbox" className="ml-3 cursor-pointer" />
      </div>

      <div className="mb-2">
        <label className="text-sm mb-1">Cardio?</label>
        <input {...register("cardio")} type="checkbox" className="ml-3 cursor-pointer" />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="w-full">
        <button
          className="font-[Inter] p-2 bg-blue-600 text-white hover:bg-black mt-2 w-1/2"
          onClick={onClose}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateTrainningGoalForm;
