import { MdOutlineAdd } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateWorkout = () => {
  const [planName, setPlanName] = useState("");
  const [objective, setObjective] = useState("");
  const [bodyCompositions, setBodyCompositions] = useState([]);
  const [bodyComposition, setBodyComposition] = useState([]);
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [fitnessGoal, setFitnessGoal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/get-all-compositions");
        setBodyCompositions(response.data);
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
        setFitnessGoals(response.data);
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
    } else if (e.target.id === "bodyComposition" && e.target.value !== "placeholder") {
      setBodyComposition(bodyCompositions[0]);
    } else if (e.target.id === "fitnessGoal" && e.target.value !== "placeholder") {
      setFitnessGoal(fitnessGoals[0]);
    }
  };

  const handleFormSubmission = async (e, bodyComposition, fitnessGoal) => {
    e.preventDefault();
    const URL = "http://localhost:8080/api/create-form";
    const formData = {
      planName,
      objective,
      bodyComposition: {
        age: bodyComposition.age,
        weight: bodyComposition.weight,
        height: bodyComposition.height,
        bodyFat: bodyComposition.bodyFat,
        lbm: bodyComposition.lbm,
        bmi: bodyComposition.bmi,
        waist: bodyComposition.waist,
        bodyType: bodyComposition.bodytype,
      },
      fitnessGoal: {
        trainingFocus: fitnessGoal.trainingFocus,
        weight: fitnessGoal.weight,
        bodyFat: fitnessGoal.bodyFat,
        frequency: fitnessGoal.frequency,
        lbm: fitnessGoal.lbm,
        bmi: fitnessGoal.bmi,
        flexibility: fitnessGoal.flexibility,
        cardio: fitnessGoal.cardio,
      },
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

  const createWorkout = async (bodyComposition, fitnessGoal) => {
    // e.preventDefault();
    console.log("before");
    const URL = "http://localhost:8080/api/generate-workout";
    const formData = {
      prompt: `Act as a training coach. Suggest exercises according to the user's input information and desired output goals. 
      Provide a detailed exercise routine following user's input and goals parameters. Create a schedule based on user's Frequency which unit is days per week.
      To do this, use the following data:
      inputs:
      age: ${bodyComposition.age},
      weight: ${bodyComposition.weight},
      height: ${bodyComposition.height},
      bodyFat: ${bodyComposition.bodyFat},
      lbm: ${bodyComposition.lbm},
      bmi: ${bodyComposition.bmi},
      waist: ${bodyComposition.waist},
      bodytype: ${bodyComposition.bodytype},

      outputs: 
      trainingFocus: ${fitnessGoal.trainingFocus},
      weight: ${fitnessGoal.weight},
      bodyFat: ${fitnessGoal.bodyFat},
      frequency: ${fitnessGoal.frequency},
      lbm: ${fitnessGoal.lbm},
      bmi: ${fitnessGoal.bmi},
      flexibility: ${fitnessGoal.flexibility},
      cardio: ${fitnessGoal.cardio}
      
      Deliver to the user the following:
      Specific exercises and the actual name of the exercise.
      Create a detailed description of the suggested exercise plan according to the user’s input parameters and output goals.
      If the cardio value equals true suggest a cardio session at the end of every training session.
      `,
      maxTokens: 1000,
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      console.log("inside try");
      await axios.post(URL, formData, config);
    } catch (error) {
      console.log("inside error");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center" >
      <form
        className="w-full rounded-md flex flex-col justify-around"
        onChange={(e) => {
          handleFormChange(e)
        }}
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
          >
            <option label="Select your current composition" value="placeholder" />
            <option label={`Initial Body Composition`} value={bodyComposition} />
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-start pb-1 text-sm">Fitness Goal</label>
          <select
            id="fitnessGoal"
            className="p-2 bg-white border border-slate-200 rounded-md"
          >
            <option label="Select a goal" value="placeholder" />
            <option label={`Initial Goal`} value={fitnessGoal} />
          </select>      </div>
        <div className="mt-4 flex justify-end">
          <button
            className="font-[Inter] border border-blue-600 py-2 px-8 rounded-md bg-blue-600 text-white 
              hover:bg-blue-800 flex justify-center items-center"
            onClick={(e) => {
              handleFormSubmission(e, bodyComposition, fitnessGoal);
              createWorkout(bodyComposition, fitnessGoal);
            }}
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
