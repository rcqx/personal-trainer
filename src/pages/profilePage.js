import { useState, useEffect } from "react";
import axios from "axios";
import profilePicture from "../assets/profile.jpg";
import { BiLoaderAlt } from "react-icons/bi";

import { getBodyComposition } from "../api/bodyComposition";
import { getGoals } from "../api/goal";

const ProfilePage = () => {
  const [compositions, setCompositions] = useState([]);
  const [loader1, setLoader1] = useState(true);
  const [loader2, setLoader2] = useState(true);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      getBodyComposition().then((res) => {
        setCompositions(res.data)
        setLoader1(false);
      });

      getGoals().then((res) => {
        setGoals(res.data)
        setLoader2(false);
      });
    }

    fetchData();
  }, []);

  console.log(goals);

  return (
    <div className="flex flex-col justify-between mt-10 mb-20">
      <div className="justify-between items-center m-[0_auto] max-w-7xl w-full">
        <div className="flex justify-between items-center border-b antialiased border-slate-300 mb-6">
          <h1 className="font-[Newsreader] text-5xl mb-2">Profile</h1>
        </div>
        <div id="profile" className="w-full mb-16 flex gap-5">
          <div id="profile-pic-container" className="border border-slate-200 shadow-lg flex-1 rounded-lg overflow-hidden">
            <img
              src={profilePicture}
            />
            <div className="flex flex-col items-start p-3">
              <h1 className="text-2xl">John Doe</h1>
              <h2 className="text-xl text-green-700 font-semibold">85 kg</h2>
              <h3 className="font-light text-sm">Calgary, AB, Canada</h3>
            </div>
          </div>

          <div className="border border-slate-100 antialiased flex-1 flex flex-col justify-center items-center rounded-xl shadow-lg">

            {!loader1 ? (
              <div className="w-5/6 h-80 flex flex-col justify-between">
                <h2 className="mb-4 text-xl font-semibold">Body Composition</h2>
                <ul className="w-full">
                  <li className="flex justify-between"><h3 className="font-light">Age</h3>              <h3 className="font-semibold">{compositions[0]?.age}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Weight (kg)</h3>      <h3 className="font-semibold">{compositions[0]?.weight} kg</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Height (cm)</h3>      <h3 className="font-semibold">{compositions[0]?.height} cm</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Body Fat (%)</h3>     <h3 className="font-semibold">{compositions[0]?.bodyFat}%</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Lean Body Mass</h3>   <h3 className="font-semibold">{compositions[0]?.lbm}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Body Mass Index</h3>  <h3 className="font-semibold">{compositions[0]?.bmi}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Waist (cm)</h3>       <h3 className="font-semibold">{compositions[0]?.waist} cm</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Body Type</h3>        <h3 className="font-semibold">{compositions[0]?.bodytype}</h3></li>
                </ul>
                <button
                  className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 mt-8 w-full"
                >
                  Update
                </button>
              </div>

            ) : (
              <div className="w-5/6 h-80 flex flex-col justify-center items-center">
                <BiLoaderAlt size={80} className="animate-spin" />
              </div>
            )}
          </div>

          <div className="border border-slate-100 antialiased flex-1 flex flex-col justify-center items-center rounded-xl shadow-lg">
            {!loader1 ? (
              <div className="w-5/6 h-80 flex flex-col justify-between">
                <h2 className="mb-4 text-xl font-semibold">Trainning Goals</h2>
                <ul className="w-full">
                  <li className="flex justify-between"><h3 className="font-light">Trainning Focus</h3>        <h3 className="font-semibold">{goals[0]?.trainingFocus}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Weight (kg)</h3>            <h3 className="font-semibold">{goals[0]?.weight} kg</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Body Fat %</h3>             <h3 className="font-semibold">{goals[0]?.bodyFat} %</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Frequency</h3>              <h3 className="font-semibold">{goals[0]?.frequency} p/w</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Lean Body Mass</h3>         <h3 className="font-semibold">{goals[0]?.lbm}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Body Mass Index</h3>        <h3 className="font-semibold">{goals[0]?.bmi}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Flexibility / Mobility</h3> <h3 className="font-semibold">{goals[0]?.flexibility ? "True" : "False"}</h3></li>
                  <li className="flex justify-between"><h3 className="font-light">Cardio</h3>                 <h3 className="font-semibold">{goals[0]?.cardio ? "True" : "False"}</h3></li>
                </ul>
                <button
                  className="font-[Inter] border border-blue-600 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 mt-8 w-full"
                >
                  Update
                </button>
              </div>) : (
              <div className="w-5/6 h-80 flex flex-col justify-center items-center">
                <BiLoaderAlt size={80} className="animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProfilePage;
