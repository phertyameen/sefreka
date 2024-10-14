import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import TrendingCard from "./TrendingCard";
import profileA from "../assets/images/profileA.jpeg"
import profileB from "../assets/images/profileB.jpeg"
import profileC from "../assets/images/profileC.jpeg"
import profileD from "../assets/images/profileD.jpeg"
import heroImgA from "../assets/images/heroImgA.jpeg"
import heroImgB from "../assets/images/heroImgB.jpeg"
import heroImgC from "../assets/images/heroImgC.jpeg"
import heroImgD from "../assets/images/heroImgD.jpeg"
import { useNavigate } from "react-router-dom";

const TrendingBlogs = () => {
  const navigate = useNavigate()
  const trendTopics = [
    "For you",
    "Mental Health",
    "Leadership",
    "Self care",
    "Teens",
  ];

  const blogs = [
    {
      profileImg: profileA,
      topicName: "Akshata Chandra", 
      date: "Sept 23", 
      titleText: "3-Minute Method for Happiness",
      field: "Mental Health", 
      readTime: "5 min read" ,
      heroImg: heroImgA
    },
    {
      profileImg: profileB,
      topicName: "Akshata Chandra", 
      date: "Sept 23", 
      titleText: "Finding Yourself in Adversity",
      field: "Self help", 
      readTime: "5 min read" ,
      heroImg: heroImgB
    },
    {
      profileImg: profileC,
      topicName: "Akshata Chandra", 
      date: "Sept 23", 
      titleText: "How to Prepare for an Interview",
      field: "Research", 
      readTime: "5 min read" ,
      heroImg: heroImgC
    },
    {
      profileImg: profileD,
      topicName: "Akshata Chandra", 
      date: "Sept 23", 
      titleText: "Fun and Effective Ways of Reading",
      field: "Teens", 
      readTime: "5 min read" ,
      heroImg: heroImgD
    },
  ]

  const navToSubs = () => {
    navigate("resources")
  }
  return (
    <div className="mt-10 md:mt-[221px] py-[46.6px] px-[36.4px]">
      <div className="flex flex-col lg:flex-row justify-between xl:w-[95%] lg:items-center">
        <div className="grid gap-3 mb-4 lg:mb-[45px]">
          <h2 className="text-[36.22px] text-[#795CD0] lg:mb-[16px]">
            Trending Blogs
          </h2>
          <p className="text-[21.13px]">
            Check out these blogs you might be interested in
          </p>
        </div>
        <div className="mb-4 lg:mb-0 text-[#795CD0] flex self-start lg:self-center gap-[6px] font-medium" onClick={navToSubs}>
          <MdOutlineKeyboardDoubleArrowRight
            style={{
              marginLeft: "2px",
              height: "23.4px",
              width: "25px",
              cursor: "pointer",
            }}
            // onClick={handleIconClick}
          />
          <span>View Resource Library</span>
        </div>
      </div>
      <ul className="flex items-center text-[#A3A3A3] border-y border-[#CCCCCC] gap-4 sm:gap-6 lg:gap-[58px] max-w-full overflow-x-auto no-scrollbar">
        {trendTopics.map((trendTopic, index) => (
          <li
            className={`whitespace-nowrap py-4 sm:py-6 lg:py-[26.4px] ${
              index === 0 ? "text-black border-b-2 border-[#2C2B2B]" : ""
            }`}
            key={index}
          >
            {trendTopic}
          </li>
        ))}
      </ul>
      <div>
        {blogs.map(({profileImg, topicName, date, titleText, field, readTime, heroImg}, index) => (
          <TrendingCard key={index} profileImg= {profileImg} topicName={topicName} date={date} titleText={titleText} field={field} readTime={readTime} heroImg={heroImg}/>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
