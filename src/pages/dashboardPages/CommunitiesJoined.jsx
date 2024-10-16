import React from "react";
import CommunityCard from "../../components/CommunityCard";

const CommunitiesJoined = ({ communities }) => {
  return (
    <div className="col-span-2 w-full md:px-4 mt-[58px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-[50px] px-4 w-full">
        {communities.map((community, index) => (
          <CommunityCard
          customWidth=""
            key={index}
            imageSrc={community.imageSrc}
            title={community.title}
            description={community.description}
            link={community.link}
            bg={"#ffffff"}
            showLink = {false}
            showButton={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunitiesJoined;