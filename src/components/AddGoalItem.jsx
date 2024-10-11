import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileNavLinks from "./ProfileNavLinks";
import pencilIcon from "../assets/images/pencilIcon.svg";
import targetIcon from "../assets/images/targetIcon.svg";
import doubleFoward from "../assets/images/doubleFowardIcon.svg";
import GoalSettingSect from "./GoalSettingSect";
import GoalTrackingSect from "./GoalTrackingSect";
import GoalProgress from "./GoalProgress";
// import PieChartAnalytics from "./PieChartAnalytics";
import BarChartsAnalytics from "./BarChartsAnalytics";

const AddGoalItem = () => {
  const location = useLocation();
  const activeNavStyles = "bg-[#F4EEFF] text-[#421196] cursor-pointer";
  const notNavStyles = "flex gap-2";

  // state to track edit mode
  const [goalSettingSect, setGoalSettingSect] = useState(true);
  const [showOverview, setShowOverview] = useState(true);

  const links = [
    { title: "Goal Setting", url: "goalsettingsect", src: pencilIcon },
    { title: "Goal Tracking", url: "goaltrackingsect", src: targetIcon },
  ];

  //   const [showgoalList, setShowGoalList] = useState(true);
  //   const [showGoalsetting, setshowGoalsetting] = useState(true);

  const goalItem = links.map(
    (link) => location.pathname.includes(link.url) && link.title
  );

  return (
    <>
      <div className="md:flex inline md:flex-row md:gap-[10px] text-[#421196] text-[20px] items-center">
        <h3 className="font-bold">Goal Settings and Tracking</h3>
        <span>
          <img src={doubleFoward} alt="" />
        </span>
        {/* <p>"{location.pathname.includes("goalsettingsect") ? "Goal Settings" : "Goal Tracking"}</p> */}
        <p>{goalItem}</p>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-[max-content_1fr] gap-2 xl:gap-12 md:flex-row rounded-lg mt-[46px] justify-between">
        <ProfileNavLinks
          links={links}
          activeNavStyles={activeNavStyles}
          notNavStyles={notNavStyles}
        />
        {location.pathname.includes("goaltrackingsect") ? (
          <GoalTrackingSect />
        ) : goalSettingSect ? (
          <GoalSettingSect setGoalSettingSect={setGoalSettingSect} />
        ) : showOverview ? (
          <GoalProgress setShowOverview={setShowOverview} />
        ) : (
        <BarChartsAnalytics />
        ) 
        // ( <GoalSettingSect />)
        }
      </div>
    </>
  );
};

export default AddGoalItem;
