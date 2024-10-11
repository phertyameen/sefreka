import React from "react";
import { MdHome } from "react-icons/md";
import CommunityCard from "../components/CommunityCard";
import careerBoostImage from "../assets/images/careerBoostImage.svg";
import healingHeartsImage from "../assets/images/healingHeartsImage.svg";
import techTalk from "../assets/images/techTalkImage.svg";
import creativeMinds from "../assets/images/creaativeMindsImage.svg";
import moneyMatters from "../assets/images/moneyMattersImage.svg";
import fitFam from "../assets/images/fitFamImage.svg";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg"
// import other images

const Communities = () => {
  const navigate = useNavigate()
  const communities = [
    {
      imageSrc: careerBoostImage,
      title: "Career Boosters",
      description:
        "Career Boosters helps you advance in your career. Join to get advice, and support from experts.",
      link: "/career-boosters", // Internal route
    },
    {
      imageSrc: healingHeartsImage,
      title: "Healing Hearts",
      description:
        "Supporting individuals who have experienced abusive relationships. Find solace and heal together.",
      link: "https://discord.com/channels/1169384706651992084/1175742340703453264", // External link
    },
    {
      imageSrc: techTalk,
      title: "TECH TALK",
      description:
        "Tech Talk is a community for tech enthusiasts, developers and IT professionals to discuss the latest trends and emerging tech fields, ask questions, share their expertise, and expand their knowledge in the ever-evolving world of technology.",
      link: "https://discord.com/channels/1169384706651992084/1175742340703453264", // External link
    },
    {
      imageSrc: creativeMinds,
      title: "Creative Minds",
      description:
        "Creative Minds is a community for artists, writers, musicians, and all creative individuals to connect, share work, collaborate, and get inspired in a safe space.",
      link: "https://discord.com/channels/1169384706651992084/1175742340703453264", // External link
    },
    {
      imageSrc: moneyMatters,
      title: "Money Matters",
      description:
        "Money Matters is a community that helps you learn about personal finance, budgeting, investing, saving strategies, and financial independence. Ask questions and get valuable insights from experts and members.",
      link: "https://discord.com/channels/1169384706651992084/1175742340703453264", // External link
    },
    {
      imageSrc: fitFam,
      title: "FitFam",
      description:
        "FitFam is a community to connect with fitness enthusiasts, share routines, discuss healthy habits, and motivate each other. It's a supportive space for progress updates and celebrating milestones.",
      link: "https://discord.com/channels/1169384706651992084/1175742340703453264", // External link
    },
  ];

  const navigateHome = () => {
    navigate('/login')
  }

  return (
    <main className="communitymain py-[23px] bg-[#421196]">
      <div className="w-full h-full max-h-[1203px] max-w-[1449px] bg-white m-auto">
        <nav className="flex justify-between items-center p-4 bg-white shadow">
          <img src={logo} alt="selfreka logo" className="h-8" />
          <MdHome className="h-[30px] w-[30px] text-[#FFCC00]" onClick={navigateHome}/>
        </nav>
        <div className="text-center py-8 w-[90%] md:w-[40%] m-auto">
          <h1 className="text-3xl font-bold text-[#421196]">
            Choose your community
          </h1>
          <p className="text-gray-600 mt-4">
            At Selfreka, you can belong to more than one community. We help you
            unveil your potentials as you walk through the journey of Self
            Discovery.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 xl:gap-[60px] px-4">
          {communities.map((community, index) => (
            <CommunityCard
            customWidth="lg:w-1/4"
              key={index}
              imageSrc={community.imageSrc}
              title={community.title}
              description={community.description}
              link={community.link}
              bg={"#FFF7DB"}
              showLink={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Communities;
