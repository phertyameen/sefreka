import React from 'react';
import checkCircle from '../assets/images/checkCircle.svg'

const ProgressItem = ({ heading, max, value, color, completed, setShowOverview }) => {
  const progressPercentage = (value / max) * 100;

  const showOverview = () => {
    setShowOverview(true);
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg relative" onClick={showOverview}>
      <p className="text-black text-lg font-semibold mb-[50px]">{heading}</p>
      
      {/* Progress bar */}
      <div className='flex gap-2 items-center'>
          <div className="relative w-[70%] h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              style={{ width: `${progressPercentage}%` }}
              className={`absolute h-full ${color} transition-all duration-500 ease-in-out`}
            ></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">{value}%</p>
            {completed && (
              <img src={checkCircle} className="ml-2 text-green-500 text-lg" />
            )}
          </div>
      </div>
    </div>
  );
};

export default ProgressItem;