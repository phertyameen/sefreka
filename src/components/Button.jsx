import React from 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-[#FBE077] text-[#421196] w-full rounded-full py-4 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
