import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import TimeLineItems from "./TimeLineItems";
import eclipsbg from "../assets/images/eclips.svg";
import { useNavigate } from "react-router-dom";

const HomeUpdates = () => {
  const navigate = useNavigate()
  const navCommunity = () => {
    navigate("community")
  }
  const timelineData = [
    {
      date: "Nov, 23",
      title: "Your had a session with",
      description: "Dr Josiah Sarpong",
      time: "6:32 am",
      color: "bg-[#FFF0B6]",
      borderCol: "border-[#FFCC00]",
    },
    {
      date: "Nov, 22",
      title: "Your last counselling session lasted",
      description: "30mins",
      time: "5:32 am",
      color: "bg-[#0AA52C4D]",
      borderCol: "border-[#0AA52C]",
    },
    {
      date: "Nov, 21",
      title: "Your counselling booking with",
      description: "Dr Josiah Sarpong holds in 4 days",
      time: "4:48 am",
      color: "bg-[#795CD04D]",
      borderCol: "border-[#421196]",
    },
    {
      date: "Nov, 19",
      title: "You have",
      description: "two pending requests",
      time: "3:32 am",
      color: "bg-[#FF52524D]",
      borderCol: "border-[#FF5252]",
    },
    {
      date: "Nov, 18",
      title: "You just booked a session with",
      description: "Dr Oladimeji Christianah",
      time: "10:32 pm",
      color: "bg-[#FFF0B6]",
      borderCol: "border-[#FFCC00]",
    },
  ];

  return (
    <div className="px-[39px] mt-10 lg:mt-[168px] overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-between xl:w-[95%] lg:items-center">
        <div className="grid gap-3 mb-4 lg:mb-[45px]">
          <h2 className="text-[36.22px] text-[#795CD0] lg:mb-[16px]">
            Community Updates
          </h2>
          <p className="text-[21.13px]">
            Here are your most recent Community updates
          </p>
        </div>
        <div onClick={navCommunity} className="mb-4 lg:mb-0 text-[#795CD0] flex self-start lg:self-center gap-[6px] font-medium">
          <MdOutlineKeyboardDoubleArrowRight
            style={{
              marginLeft: "2px",
              height: "23.4px",
              width: "25px",
              cursor: "pointer",
            }}
            // onClick={handleIconClick}
          />
          <span>Go to Community</span>
        </div>
      </div>
      <div className="relative w-full">
        <div className="hidden md:block 2xl:hidden absolute left-[-20%] top-7 w-full lg:w-max h-max bottom-0 z-0">
          <img src={eclipsbg} alt="" />
        </div>
        <ul className="timeline timeline-vertical mt-[17px]">
          {timelineData.map((item, index) => (
            <TimeLineItems
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              time={item.time}
              color={item.color}
              borderCol={item.borderCol}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeUpdates;
