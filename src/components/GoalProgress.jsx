import React from "react";
import ProgressItem from "./ProgressItem";

const GoalProgress = ({ setShowOverview }) => {
  const progressCardDetails = [
    {
      heading: "Complete my web design course",
      value: 70,
      max: 100,
      color: "bg-green-500",
    },
    { heading: "Goal2", value: 25, max: 100, color: "bg-red-500" },
    {
      heading: "One week daily exercise",
      value: 100,
      max: 100,
      color: "bg-green-500",
      completed: true,
    },
    { heading: "Goal4", value: 50, max: 100, color: "bg-green-500" },
  ];

  const showOverview = () => {
    setShowOverview(false);
  };

  return (
    <div className="relative text-black">
      <h3 className="text-purple-700 text-xl font-semibold mb-4">
        Goal Overview
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {progressCardDetails.map((detail, index) => (
          <ProgressItem
            key={index}
            heading={detail.heading}
            max={detail.max}
            value={detail.value}
            color={detail.color}
            completed={detail.completed}
          />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-6 py-2 bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
          onClick={showOverview}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default GoalProgress;
