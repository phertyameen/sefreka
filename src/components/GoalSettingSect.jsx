import React, { useState } from "react";

const GoalSettingSect = ( {setGoalSettingSect} ) => {
  const [formData, setFormData] = useState([]);

  const onsubmit = () => {};

  const onchange = () => {};

  const handleCreateGoal = () => {
    setGoalSettingSect(false)
  }

  const { goalTitle, timeFrame, goalType } = formData;

  return (
    <div className="mx-1 shadow-lg px-5 py-8 rounded">
      <nav className="text-[#421196] text-lg md:flex justify-between mb-5 md:mb-[52px]">
        <span className="font-medium">Set a New Goal</span>
        <div className="flex justify-between md:gap-[25px]">
          <span>Add Calender</span>
          <span>Goal Type</span>
        </div>
      </nav>
      <form onSubmit={onsubmit}>
        <div className="grid gap-6 md:grid-row-2">
          <>
            <div className="col-span-1">
              <label htmlFor="goalTitle">Goal Title</label>
              <input
                type="text"
                name="goalTitle"
                id="goalTitle"
                className="goalSettingInp w-full mt-[6px]"
                value={goalTitle}
                onChange={onchange}
                placeholder="Complete my web design course"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="timeFrame">Schedule Time Frame</label>
              <input
                type="date"
                name="timeFrame"
                id="timeFrame"
                className="goalSettingInp w-full mt-[6px]"
                value={timeFrame}
                onChange={onchange}
                placeholder=""
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="goalType">Goal Type</label>
              <input
                type="text"
                name="goalType"
                id="goalType"
                className="goalSettingInp w-full mt-[6px]"
                value={goalType}
                onChange={onchange}
                placeholder="Set goal type"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="goalType">Goal details (Optional)</label>
              <textarea
                type="text"
                name="goalType"
                id="goalType"
                className="goalSettingInp w-full mt-[6px] overflow-y-scroll no-scrollbar"
                value={goalType}
                onChange={onchange}
                cols="3"
                rows="3"
                placeholder="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut alddddddddddddddddddddddddddddd"
              ></textarea>
            </div>
            <div className="flex gap-4 items-center justify-end lg:mt-7">
              <button className="bg-[#FBE077] text-[#421196] w-max rounded-full px-[24px] py-[10px]" onClick={handleCreateGoal}>
                Create Goal
              </button>
            </div>
          </>
        </div>
      </form>
    </div>
  );
};

export default GoalSettingSect;
