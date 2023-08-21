import { useForm } from "react-hook-form";

const CreateTrainningGoalForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
      <label>Training Focus</label>
      <select {...register("trainingFocus", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2">
        <option value="gainMuscle">Gain muscle</option>
        <option value="burnFat">Burn Fat</option>
        <option value="strength">Strength</option>
        <option value="aerobic">Aerobic</option>
      </select>

      <label>Weight (kg)</label>
      <input {...register("weight", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <label>Body Fat Percentage (%)</label>
      <input {...register("bodyFat", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <label>Training Frequency</label>
      <select {...register("trainingFocus", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2">
        <option value="2">Twice per week</option>
        <option value="3">Trice per week</option>
        <option value="4">Four days per week</option>
        <option value="5">Five days per week</option>
        <option value="6">Six days per week</option>
      </select>

      <label>Lean Body Mass</label>
      <input {...register("lbm", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <label>Body Mass Index</label>
      <input {...register("bmi", { required: true })} className="bg-white border border-slate-200 p-2 w-full mb-2" />

      <div className="mb-2">
        <label>Cool-Down Stretches?</label>
        <input {...register("lbm", { required: true })} type="checkbox" className="ml-3" />
      </div>

      <div className="mb-2">
        <label>Cardio?</label>
        <input {...register("lbm", { required: true })} type="checkbox" className="ml-3" />
      </div>
      {errors.exampleRequired && <span>This field is required</span>}

      <div className="border border-black w-full">
        <button className="font-[Inter] border border-blue-600 p-2 bg-blue-600 text-white hover:bg-black mt-8 w-1/2">
          Update
        </button>
      </div>
    </form>
  );
};

export default CreateTrainningGoalForm;
