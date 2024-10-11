import React from 'react'
import Button from './Button';

const  GoalSettingLists = ({ setShowGoalList }) => {
    const listItems = [
        {
          date: "12th October, 2023",
          goal: "Complete my web design courses",
          status: "Ongoing",
        },
        { date: "5th January, 2023", goal: "Goal", status: "Completed" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
        { date: "Goal", goal: "Goal", status: "Goal" },
      ];
    
      const handleBtnClick = () => {
        setShowGoalList(false)
        console.log("btn clicked")
      }

  return (
    <>
       <div className="border border-black rounded-[10px] mt-[33px]">
        <div className="w-full grid grid-cols-3 gap-[10px] text-[18px] font-bold">
          <h4 className="bg-[#FAEEFF] py-[2.5px] px-1 md:px-6">Date Set</h4>
          <h4 className="bg-[#FAEEFF] py-[2.5px] px-1 md:px-6">Goal</h4>
          <h4 className="bg-[#FAEEFF] py-[2.5px] px-1 md:px-6">Status</h4>
        </div>
        {listItems.map((listItem, index) => (
          <div key={index} className="w-full grid grid-cols-3 gap-[10px] rounded-lg">
            <p className="bg-[#FDF9FF] py-[2.5px] px-1 md:px-6 border-t border-[#795CD0]" key={index.date}>
              {listItem.date}
            </p>
            <p className="bg-[#FDF9FF] py-[2.5px] px-1 md:px-6 border-t border-[#795CD0]" key={index.goal}>
              {listItem.goal}
            </p>
            <p className="py-[2.5px] px-1 md:px-6 bg-[#FDF9FF] border-t border-[#795CD0]" key={index.status}>
              {listItem.status}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end my-16">
        <Button
          text="+ Create new  Goal"
          className="w-max py-[10px] px-6"
          onClick={handleBtnClick}
        />
      </div> 
    </>
  )
}

export default GoalSettingLists