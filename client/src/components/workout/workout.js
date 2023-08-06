import { useState, useEffect } from "react";
import { getWorkouts } from "../../api/workouts";
import { MdDownload } from "react-icons/md";
import { BsTable } from "react-icons/bs";

const Workout = () => {
  const [workout, setWorkout] = useState([]);
  const [parsedWorkout, setParseWorkout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWorkouts();
        setWorkout(response.data[0].response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (workout.length > 0) {
      setParseWorkout(workout.split("Day ").slice(1))
    };
  }, [workout])

  return (
    <div className="flex min-h-[40em] justify-center flex-col gap-3 py-20 relative
    items-center m-[0_auto] max-w-7xl border-4 border-dashed border-slate-200">
      <div className="text-slate-400 absolute right-2 top-3 cursor-pointer flex items-center gap-1">
        <BsTable size={30} />
        <MdDownload size={40} />
      </div>

      {
        parsedWorkout.map((dayRoutine, index) => {
          const [day, ...exercises] = dayRoutine.trim().split("\n");
          return (
            <div key={index} className="border-2 border-blue-300 w-[70%] min-h-40 p-8 shadow-md">
              <h1 className="w-full text-start pb-2 text-lg text-slate-800 font-semibold">Day {day}</h1>
              <ul className="pl-6">
                {exercises.map((exercise, exerciseIndex) => (
                  <li key={exerciseIndex} className="text-start text-slate-700 pb-1">{exercise}</li>
                ))}
              </ul>
            </div>
          );
        })
      }
    </div >
  );
};

export default Workout;
