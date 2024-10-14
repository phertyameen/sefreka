import pencilIcon from "../assets/images/pencilIcon.svg";
import React from "react";

const CardItem = ({ title, noColor, no, text, bgColor, border, boxShadow, innerBg }) => {
  return (
    <div className={`pt-[14.93px] pb-[9px] px-[17.95px] rounded-[11.95px] w-full ${bgColor} ${border} ${boxShadow}`}>
      <div className="flex justify-between items-center">
        <p className="font-medium text-sm w-[80%] text-nowrap overflow-x-auto no-scrollbar">{title}</p>
        <div className={`flex items-center justify-center ${innerBg} w-[26.07px] h-[26.07px] rounded-[6.52px] border-[0.54px] border-[#D9D9D9]`}>
          <span className="m-auto">
            <img src={pencilIcon} alt="icon" className="h-[13px] w-[13px]" />
          </span>
        </div>
      </div>
      {/* <h2 className={`text-[40p] text-${[noColor]}`}>{no}</h2> */}
      <h2 className={`text-[40px] text-[${noColor}]`}>{no}</h2>
      <p className="text-[#2C2B2B] text-xs">{text}</p>
    </div>
  );
};

export default CardItem;
