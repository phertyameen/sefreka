import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import communityIcon from "../../assets/images/communityIcon.svg";
import doublefoward from "../../assets/images/doubleFowardIcon.svg";
import ProfileNavLinks from "../../components/ProfileNavLinks";
import CommunitiesOverview from "./CommunitiesOverview";
import CommunitiesJoined from "./CommunitiesJoined";
import careerBoostImage from "../../assets/images/careerBoostImage.svg";
import healingHeartsImage from "../../assets/images/healingHeartsImage.svg";
import techTalk from "../../assets/images/techTalkImage.svg";
import creativeMinds from "../../assets/images/creaativeMindsImage.svg";
import moneyMatters from "../../assets/images/moneyMattersImage.svg";
import fitFam from "../../assets/images/fitFamImage.svg";
import searchIcon from "../../assets/images/searchIcon.svg";

const Community = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const activeNavStyles = "bg-[#F4EEFF] text-[#421196] cursor-pointer";
  const notNavStyles = "flex gap-2";

  const links = [
    {
      title: "Communities overview",
      url: "communitiesoverview",
      src: communityIcon,
    },
    {
      title: "Communities joined",
      url: "communitiesjoined",
      src: communityIcon,
    },
  ];

  const community = links.map(
    (link) => location.pathname.includes(link.url) && link.title
  );

  // Uplifted communities array
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

  // Step 2: Filter the communities based on the search query
  const filteredCommunities = communities.filter(
    (community) =>
      community.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="mt-[46px] mx-4 lg:mx-6 md:ml-[54px]">
      <div className="flex gap-[10px] text-[#421196]">
        <h3>Community</h3>
        <img src={doublefoward} alt="" />
        <p>{community}</p>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-[max-content_1fr] gap-2 xl:gap-12 md:flex-row rounded-lg mt-[46px] justify-between">
        <ProfileNavLinks
          links={links}
          activeNavStyles={activeNavStyles}
          notNavStyles={notNavStyles}
          text={"sm"}
        />
        <div className="w-full lg:px-4 divShadow">
          <div className="relative inpDiv w-[80%] m-auto mt-5">
            {!isFocused && (
              <img
                src={searchIcon}
                alt="search icon"
                className="absolute left-6 translate-y-1/2"
              />
            )}
            <input
              type="search"
              name="search"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-5 searchImp w-full"
            />
          </div>
          <div>
            {location.pathname.includes("communitiesoverview") ? (
              <CommunitiesOverview communities={filteredCommunities} />
            ) : (
              <CommunitiesJoined
                communities={filteredCommunities.slice(0, 4)}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Community;
