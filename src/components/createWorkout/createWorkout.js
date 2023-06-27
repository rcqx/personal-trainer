import { MdOutlineAdd } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { bodyComp1, bodyComp2, FG } from "../../pages/mock";

const CreateWorkout = () => {
  const [planName, setPlanName] = useState("");
  const [objective, setObjective] = useState("");
  const [bodyComposition, setBodyComposition] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [allCompositions, setAllCompositions] = useState([]);
  const [allGoals, setAllGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get-all-compositions");
        setAllCompositions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get-all-goals")
        setAllGoals(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFormChange = (e) => {
    if (e.target.id === "planName") {
      setPlanName(e.target.value);
    } else if (e.target.id === "objective") {
      setObjective(e.target.value);
    } else if (e.target.id === "bodyComposition") {
      setBodyComposition(bodyComp1.bodyComposition);
    } else if (e.target.id === "fitnessGoal") {
      setFitnessGoal(FG.fitnessGoal);
    }
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8080/api/create-workout";
    const formData = {
      planName,
      objective,
      bodyComposition,
      fitnessGoal,
      status: "new",
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(URL, formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center" >
      <form
        className="w-full rounded-md flex flex-col justify-around"
        onChange={(e) => handleFormChange(e)}
      >
        <div className="flex flex-col mb-3">
          <label className="text-start text-sm pb-1">Name</label>
          <input
            id="planName"
            className="p-2 border border-slate-200 rounded-md"
            placeholder="Enter a plan name"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-start pb-1 text-sm">Objective</label>
          <input
            id="objective"
            className="p-2 border border-slate-200 rounded-md"
            placeholder="What's your main goal?"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-start pb-1 text-sm">Body Composition</label>
          <select
            id="bodyComposition"
            className="p-2 bg-white border border-slate-200 rounded-md"
            defaultValue="body composition 1"
            onChange={(e) => console.log(e.target.value)}
          >
            {allCompositions.map((item, index) => {
              return <option key={index} label={`Body Composition ${index + 1}`} value={item.id} />
            })}
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-start pb-1 text-sm">Fitness Goal</label>
          <select
            id="fitnessGoal"
            className="p-2 bg-white border border-slate-200 rounded-md"
            onChange={(e) => console.log(e.target.value)}
          >
            {allGoals.map((item, index) => {
              return <option key={index} label={`Goal ${index + 1}`} value={item.id} />
            })}
          </select>      </div>
        <div className="mt-4 flex justify-end">
          <button
            className="font-[Inter] border border-blue-600 py-2 px-8 rounded-md bg-blue-600 text-white 
              hover:bg-blue-800 flex justify-center items-center"
            onClick={(e) => handleFormSubmission(e)}
          >
            <MdOutlineAdd className="mr-1" />
            Create Plan
          </button>
        </div>
      </form>
    </div >
  );
};

export default CreateWorkout;
