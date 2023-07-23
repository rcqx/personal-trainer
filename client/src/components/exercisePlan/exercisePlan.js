const ExercisePlan = ({ image, planName, status, objective }) => {
  return (
    <div className="w-1/3 border border-slate-200 shadow-md rounded-3xl overflow-hidden cursor-pointer">
      <img src={image} alt="thumbnail" />
      <div className="px-4 py-6 bg-[#FAFAF5]">
        <h3 className="text-start font-semibold">{planName}</h3>
        <h3 className="text-start font-semibold text-green-700">{status[0].toUpperCase() + status.slice(1)}</h3>
        <p className="text-start text-sm text-slate-600">{objective[0].toUpperCase() + objective.slice(1)}</p>
      </div>
    </div>
  );
};

export default ExercisePlan;
