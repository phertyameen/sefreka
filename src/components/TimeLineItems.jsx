import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const TimeLineItems = ({ date, title, description, time, color, borderCol }) => {
  return (
    <li className="text-[19.69px] text-[#2C2B2B] flex items-start gap-4">
      {/* Date and circle marker */}
      <div className="relative flex flex-col items-center">
        <span
          className={`absolute right-[-27%] block w-[19.7px] h-[19.7px] border-[3.28px] z-1 ${borderCol} rounded-full ${color}`}
        />
        <span className="md:text-nowrap md:mr-[29.5px] md:right-[-20%]">{date}</span>
      </div>

      {/* Timeline content box */}
      <div className="w-full md:border-l border-[#4E4E4E]">
        <div className="w-full flex justify-between bg-white ml-[12px] py-[12px] mb-[13.13px] px-[5px] lg:ml-[29.5px] lg:py-[15px] lg:px-[30px] shadow rounded-lg">
          <div className="text-[22.97px] text-[#4E4E4E]">
            <p className="font-medium">
              {title}{" "}
              <span className="text-[22.97px] font-semibold text-[#795CD0]">
                {description}
              </span>
            </p>
            <p className="text-['#4e4e4e'] mt-2 flex gap-[6.5px] items-center">
              <MdOutlineKeyboardDoubleArrowRight className="h-[21.13px] w-[21.13px]" />{" "}
              <span>View notification</span>
            </p>
          </div>
          <div className="">{time}</div>
        </div>
      </div>
    </li>
  );
};

export default TimeLineItems;
