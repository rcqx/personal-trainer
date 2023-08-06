import { useState, useEffect } from "react";
import { getWorkouts } from "../../api/workouts";

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
    if (workout.length > 0) setParseWorkout(workout.split("Day ").slice(1));
  }, [workout])

  return (
    <div className="flex min-h-[40em] justify-center flex-col
    items-center m-[0_auto] max-w-7xl border border-red-600 cursor-pointer">

      {parsedWorkout.map((dayRoutine, index) => {
        const [day, ...exercises] = dayRoutine.trim().split("\n");
        return (
          <div key={index} className="border border-red-600 w-2/3 min-h-40">
            <p className="w-full text-start">Day {day}</p>
            {exercises.map((exercise, exerciseIndex) => (
              <p key={exerciseIndex} className="text-start">{exercise}</p>
            ))}
          </div>
        );
      })}

    </div>
  );
};

export default Workout;
