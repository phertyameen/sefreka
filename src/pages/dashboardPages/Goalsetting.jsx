import React, { useState } from "react";
import doubleFoward from "../../assets/images/doubleFowardIcon.svg";
import GoalSettingLists from "../../components/GoalSettingLists";
import AddGoalItem from "../../components/AddGoalItem";

const Goalsetting = () => {

  const [showgoalList, setShowGoalList] = useState(true)
  const [showGoalsetting, setshowGoalsetting] = useState(true)

  return (
    <main className="mt-[46px] mx-4 lg:mx-6 md:ml-[54px]">
      {showgoalList && <div className="sm:flex inline md:flex-row md:gap-[10px] text-[#421196] text-[20px] items-center">
        <h3 className="font-bold">Goal Settings and Tracking</h3>
        <span>
          <img src={doubleFoward} alt="" />
        </span>
        <p>Goal Settings</p>
        <span>
          <img src={doubleFoward} />
        </span>
        <p>Goal Status</p>
      </div>}
      {showgoalList ? <GoalSettingLists setShowGoalList={setShowGoalList}/> : <AddGoalItem />}
    </main>
  );
};

export default Goalsetting;
