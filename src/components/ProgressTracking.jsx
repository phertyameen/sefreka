import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import pencilIcon from "../assets/images/pencilIcon.svg";
import CardItem from "./CardItem";

const ProgressTracking = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("goalsetting");
  };

  const cardItems = [
    {
      title: "Active goals",
      no: 1,
      text: "0 goals completed",
      color: "#421196",
    },
    {
      title: "Overdue goals",
      no: 1,
      text: "One goal is overdue",
      color: "#FF5252",
    },
    {
      title: "Active tasks",
      no: 5,
      text: "0 tasks completed",
      color: "#421196",
    },
    {
      title: "Overdue tasks",
      no: 0,
      text: "No task is overdue",
      color: "#421196",
    },
    {
      title: "Tasks done this week",
      no: 0,
      text: "No task is overdue",
      color: "#421196",
    },
  ];
  return (
    <div className="row-span-[max] custum-box-shadow w-full bg-custum-backdrop-filter">
      <div className="bg-header-background pt-10 px-5 lg:pt-[44.8px] lg:px-[37.3px] mx-[15px] lg:ml-[15px] lg:mr-[51px]">
        <div className="flex justify-between">
          <h2 className="text-2xl text-[#FBE077]">Your Progress at a glance</h2>
          <MdOutlineKeyboardDoubleArrowRight
            style={{
              color: "#fff",
              height: "23.4px",
              width: "25px",
              cursor: "pointer",
            }}
            onClick={handleIconClick}
          />
        </div>
        <p className="text-[#5825B0] mt-[30px]">Keep track of your growth this week</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[4.9px] xl:px-[41.81px] py-[31.36px] px-5 lg:pt-[44.8px] lg:px-[37.3px] mx-[15px] lg:ml-[15px] lg:mr-[51px] ">
        {cardItems.map((cardItem, index) => {
          const bgColor = index % 2 === 0 ? "bg-[#FBE077]" : "bg-[#D9D9D9]";
          const innerBg = index % 2 === 0 ? "bg-[#D9D9D9]" : "bg-[#FBE077]";
          const boxShadow =
            index % 2 !== 0
              ? "shadow-white-box-shadow"
              : "shadow-yellow-box-shadow";
          const border =
            index % 2 === 0
              ? ""
              : "border-[0.75px] border-solid border-[#D9D9D9]";

          return (
            <CardItem
              key={index}
              title={cardItem.title}
              noColor={cardItem.color}
              no={cardItem.no}
              text={cardItem.text}
              bgColor={bgColor}
              border={border}
              boxShadow={boxShadow}
              innerBg={innerBg}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-end px-[104.76px] gap-[11.9px] text-[#5825B0] mb-10 lg:mb-[105px]" onClick={handleIconClick}>
        <span className="flex items-center justify-center w-[35.84px] h-[35.84px] rounded-[8.96px] border-[0.75px] border-[#D9D9D9]">
          <img src={pencilIcon} alt="icon" className="h-[13px] w-[13px]" />
        </span>
        <span>Edit goals</span>
      </div>
    </div>
  );
};

export default ProgressTracking;
