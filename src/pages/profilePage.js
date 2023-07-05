import { useState, useEffect } from "react";
import axios from "axios";
import profilePicture from "../assets/profile.jpg";
import { BiLoaderAlt } from "react-icons/bi";
import BodyCompositionTable from "../components/bodyCompositionTable/bodyCompositionTable";
import GoalsTable from "../components/goalsTable/goalsTable";
import UpdateModal from "../components/updateModal/updateModal";
import { getBodyComposition } from "../api/bodyComposition";
import { getGoals } from "../api/goal";

const ProfilePage = () => {
  const [compositions, setCompositions] = useState([]);
  const [bcModal, setBcModal] = useState(false);
  const [goalsModal, setGoalsModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      getBodyComposition().then((res) => {
        setCompositions(res.data)
        setLoader(false);
      });

      getGoals().then((res) => {
        setGoals(res.data)
        setLoader(false);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-between mt-10 mb-20">
      <div className="justify-between items-center m-[0_auto] max-w-7xl w-full">
        <div className="flex justify-between items-center border-b antialiased border-slate-300 mb-6">
          <h1 className="font-[Newsreader] text-5xl mb-2">Profile</h1>
        </div>
        <div id="profile" className="w-full mb-16 flex gap-5">
          <div
            id="profile-pic-container"
            className="border border-slate-200 shadow-lg flex-1 rounded-lg overflow-hidden"
          >
            <img src={profilePicture} />
            <div className="flex flex-col items-start p-3">
              <h1 className="text-2xl">John Doe</h1>
              <h2 className="text-xl text-green-700 font-semibold">85 kg</h2>
              <h3 className="font-light text-sm">Calgary, AB, Canada</h3>
            </div>
          </div>
          <div className="border border-slate-100 antialiased flex-1 flex flex-col justify-center items-center rounded-xl shadow-lg">
            {!loader ? (
              <BodyCompositionTable
                compositions={compositions}
                setBcModal={setBcModal}
              />
            ) : (
              <div className="w-5/6 h-80 flex flex-col justify-center items-center">
                <BiLoaderAlt size={80} className="animate-spin" />
              </div>
            )}
          </div>
          <div className="border border-slate-100 antialiased flex-1 flex flex-col justify-center items-center rounded-xl shadow-lg">
            {!loader ? (
              <GoalsTable
                goals={goals}
                setGoalsModal={setGoalsModal}
              />
            ) : (
              <div className="w-5/6 h-80 flex flex-col justify-center items-center">
                <BiLoaderAlt size={80} className="animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
      {bcModal && <UpdateModal bcModal={bcModal} setBcModal={setBcModal} />}
    </div>
  );
};

export default ProfilePage;
