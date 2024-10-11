import React from "react";
import CommunityCard from "../../components/CommunityCard";

const CommunitiesOverview = ({ communities }) => {
  return (
    <div className="px-5 lg:p-[61px]">
      <div className="text-center py-8 md:w-[60%] m-auto">
        <h1 className="text-3xl font-bold text-[#421196]">
          Choose your community
        </h1>
        <p className="text-gray-600 mt-4">
          At Selfreka, you can belong to more than one community. We help you
          unveil your potentials as you walk through the journey of Self
          Discovery.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 xl:gap-[55px] w-full">
        {communities.map((community, index) => (
          <CommunityCard
            customWidth="full"
            key={index}
            imageSrc={community.imageSrc}
            title={community.title}
            description={community.description}
            link={community.link}
            bg={"#ffffff"}
            showLink={true}
            showButton={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunitiesOverview;     