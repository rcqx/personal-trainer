import { useState, useEffect } from "react";
import { getWorkouts } from "../../api/workouts";
import { MdDownload } from "react-icons/md";
import { MdTableView } from "react-icons/md";

const Workout = () => {
  const [workout, setWorkout] = useState([]);
  const [parsedWorkout, setParseWorkout] = useState([]);
  const [tableLabel, setTableLabel] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState(false);

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

  const showTableLabel = () => {
    setTableLabel(true);
  };

  const hideTableLabel = () => {
    setTableLabel(false);
  };

  const showDownloadLabel = () => {
    setDownloadLabel(true);
  };

  const hideDownloadLabel = () => {
    setDownloadLabel(false);
  };

  const downloadAction = () => {
    console.log("Download document");
  }

  const goToTableView = () => {
    console.log("Go to table view");
  }

  return (
    <div className="flex min-h-[40em] justify-center flex-col gap-3 py-20 relative
    items-center m-[0_auto] max-w-7xl border-4 border-dashed border-slate-200">
      <div className="text-slate-400 absolute right-5 top-3 cursor-pointer flex items-center gap-1">
        <div className="relative">
          <MdTableView size={40}
            onMouseEnter={showTableLabel}
            onMouseLeave={hideTableLabel}
            onClick={goToTableView}
          />
          {tableLabel && <p className="absolute -left-6 mt-2 w-24 text-sm tracking-tighter">See table</p>}
        </div>
        <div className="relative">
          <MdDownload size={40}
            onMouseEnter={showDownloadLabel}
            onMouseLeave={hideDownloadLabel}
            onClick={downloadAction}
          />
          {downloadLabel && <p className="absolute -left-6 mt-2 w-24 text-sm tracking-tighter">Download</p>}
        </div>
      </div>

      {parsedWorkout.map((dayRoutine, index) => {
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
      })}
    </div >
  );
};

export default Workout;
