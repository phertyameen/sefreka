import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";

const TrendingCard = ({
  profileImg,
  topicName,
  date,
  titleText,
  field,
  readTime,
  heroImg,
}) => {
  return (
    <div>
      <div className="w-full py-5 sm:p-5 lg:py-[29px] lg:pl-52px lg:pr-[35px] text-[#2C2B2B] grid md:grid-cols-6">
          <div className="col-span-4">
            <div className="flex gap-[11px] h-[26.21px] w-[26.21px] rounded-full">
              <img
                src={profileImg}
                alt=""
                className="w-full h-full rounded-full"
              />
              <p className="text-nowrap">
                {topicName}
                {". "}
                {date}
              </p>
            </div>
            <div className="md:ml-[6.4%]">
              <h3 className="text-[23.3px] font-bold">{titleText}</h3>
              <p className="text-[17.48px]">
                Lorem ipsum dolor sit amet consectetur. Elit eu aliquam libero
                integer nibh sollicitudin vestibulum. Duis at vehicula tellus in
                accumsan etiam a nunc suspendisse...
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-[17.4px] items-center mt-2">
                  <span className="bg-[#D9D9D9] text-[#2C2B2B] text-[14.56px] font-light p-[11.65px] rounded-full">
                    {field}
                  </span>
                  <span>{readTime}</span>
                </div>
                <div className="flex gap-2 sm:gap-[20px] text-[#4E4E4E]">
                  <FaBookmark />
                  <CiCircleMinus />
                  <IoEllipsisVertical />
                </div>
              </div>
            </div>
          </div>
        <div className="h-full col-span-2 pt-5 sm:pt-0 sm:p-5 rounded-[5.83px] sm:ml-[10%] custom-img-container">
          <img src={heroImg} alt="image" className="w-full h-full rounded-[5.83px]" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TrendingCard;
