import React from 'react';

const Input = ({ type, name, id, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`py-4 px-5 border rounded-[9.79px] border-[#421196] outline-none w-full ${className}`}
    />
  );
};

export default Input;