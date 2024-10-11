import React from "react";
import { Link } from "react-router-dom";

const CommunityCard = ({ imageSrc, title, description, link, bg, showLink, showButton, customWidth }) => {
  return (
    <div className={`w-full ${customWidth}`}>
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h4 className="text-lg font-bold mb-2 text-[#421196] text-center">
            {title}
          </h4>
          <p className="text-gray-600 mb-4 h-[54px] overflow-y-scroll no-scrollbar">
            {description}
          </p>
          {/* Conditionally render button if is true */}
          {showLink && <Link
            to={link}
            className="text-indigo-600 font-semibold underline underline-offset-2 ml-[80%]"
          >
            Join
          </Link>}
          {/* Conditionally render button if is true */}
          {showButton && (
            <div className="flex justify-between font-medium text-xs lg:text-sm">
              <button className="w-max bg-transparent border text-sm text-[#FF5252] border-[#FF5252] px-3 py-[4px] lg:px-6 lg:py-[10px] rounded-full">Leave</button>
              <button className="w-max text-sm bg-[#FBE077] border border-none rounded-full px-2 py-[2px] lg:px-6 lg:py-[10px] text-nowrap">View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
