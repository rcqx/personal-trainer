import { useState, useEffect } from "react";
import ProfileCard from "../components/profileCard/profileCard";
import profilePicture from "../assets/profile.jpg";
import { BiLoaderAlt } from "react-icons/bi";
import BodyCompositionTable from "../components/bodyCompositionTable/bodyCompositionTable";
import GoalsTable from "../components/goalsTable/goalsTable";
import { getBodyComposition } from "../api/bodyComposition";
import UpdateCompositionModal from "../components/updateModals/updateCompositionModal";
import UpdateGoalsModal from "../components/updateModals/updateGoalsModal";
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

  console.log(goals);

  return (
    <div className="flex flex-col justify-between mt-10 mb-20">
      <div className="justify-between items-center m-[0_auto] max-w-7xl w-full">
        <div className="flex justify-between items-center border-b antialiased border-slate-300 mb-6">
          <h1 className="font-[Newsreader] text-5xl mb-2">Profile</h1>
        </div>
        <div id="profile" className="w-full mb-16 flex gap-5 h-96">
          <ProfileCard
            profilePicture={profilePicture}
            name={"John Doe"}
            weight={"85 Kg"}
            height={"180 Cm"}
            location={"Calgary, AB. Canada"}
          />
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
        </div>
        <div className="flex justify-between items-center border-b antialiased border-slate-300 mb-6">
          <h1 className="font-[Newsreader] text-4xl mb-2">Trainning Goals</h1>
        </div>

        <div className="flex">
          {goals.map((item, index) => {
            return (
              <GoalsTable
                goal={item}
                setGoalsModal={setGoalsModal}
                index={index}
              />
            )
          })}
        </div>
      </div>
      {bcModal && <UpdateCompositionModal bcModal={bcModal} setBcModal={setBcModal} />}
      {goalsModal && <UpdateGoalsModal goalsModal={goalsModal} setGoalsModal={setGoalsModal} />}
    </div>
  );
};

export default ProfilePage;
