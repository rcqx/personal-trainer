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
import { VscAdd } from "react-icons/vsc";
import Modal from "../components/modal/modal";

const ProfilePage = () => {
  const [compositions, setCompositions] = useState([]);
  const [bcModal, setBcModal] = useState(false);
  const [goalsModal, setGoalsModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

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

  const showModal = () => {
    setModal(!modal);
  }

  console.log(modal);

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
          <div className="border border-slate-100 antialiased flex-1 flex flex-col justify-center items-center shadow-lg">
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

          {goals.length === 2 && (
            <div className="border-2 border-dashed border-slate-300 w-1/3 flex justify-center items-center">
              {/* <GrAddCircle size={60} className="text-red-600" /> */}
              <VscAdd size={50} className="text-slate-400 cursor-pointer hover:scale-110" />
            </div>
          )}

          {goals.length === 1 && (
            <>
              <div className="border-2 border-dashed border-slate-300 w-1/3 mr-2 flex justify-center items-center">
                <VscAdd size={50} className="text-slate-400 cursor-pointer hover:scale-110" />
              </div>
              <div className="border-2 border-dashed border-slate-300 w-1/3 flex justify-center items-center">
                <VscAdd size={50} className="text-slate-400 cursor-pointer hover:scale-110" />
              </div>
            </>
          )}

          {goals.length === 0 && (
            <>
              <div className="border-2 border-dashed border-slate-300 w-1/3 mr-2 flex justify-center items-center h-80">
                <VscAdd size={50} className="text-slate-400 cursor-pointer hover:scale-110" onClick={showModal} />
              </div>
              <div className="border-2 border-dashed border-slate-300 w-1/3 mr-2 flex justify-center items-center h-80">
                <VscAdd size={50} className="text-slate-400 cursor-pointer hover:scale-110" />
              </div>
              <div className="border-2 border-dashed border-slate-300 w-1/3 flex justify-center items-center h-80">
                <VscAdd size={50} className="text-slate-400 cursor-pointer hover:scale-110" />
              </div>
            </>
          )}
        </div>
      </div>
      {bcModal && <UpdateCompositionModal bcModal={bcModal} setBcModal={setBcModal} />}
      {goalsModal && <UpdateGoalsModal goalsModal={goalsModal} setGoalsModal={setGoalsModal} />}

      <Modal
        modal={modal}
        onClose={() => setModal(false)}
        title={"New training goal"}
      />

    </div>
  );
};

export default ProfilePage;
