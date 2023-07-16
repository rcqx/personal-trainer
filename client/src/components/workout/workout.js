import { useState, useEffect } from "react";
import { getWorkouts } from "../../api/workouts";

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWorkouts();
        setWorkouts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-[40em] justify-between 
    items-center m-[0_auto] max-w-7xl">
      <h1>{workouts[0]?.responseTest}</h1>
    </div>
  );
};

export default Workout;
