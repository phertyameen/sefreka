import React, { useState } from "react";
import homeIcon from "../assets/images/homeIcon.svg";
import logo from "../assets/images/logo.svg";
import backArrow from "../assets/images/backArrow.svg";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { MdHome } from "react-icons/md";

const InfoResetPassword = ({ onResetPasswordClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onResetPasswordClick();
  }
  return (
      <div className="lg:w-[55%]  mt-10">
        <div className="flex justify-between mb-[30px] md:mb-[60px]">
          <div></div>
          <div>
            <img
              src={logo}
              alt="selfreka logo"
              className="w-[100px] md:w-auto"
            />
          </div>
          <div className="">
          <MdHome className="h-[30px] w-[30px] text-[#421196]" />
          </div>
        </div>

        <div className="ml-[5%] mr-[8%] shadow-xl rounded-[9.79px]">
          <h1 className="text-center font-[Georgia] text-[47px]">
            Reset Password
          </h1>
          <p className="text-center px-4 md:px-[70px]">
            We’ll send you an email with instructions on how to reset your
            password.
          </p>
          <form action="" onSubmit={handleSubmit} className="w-full py-[45px] px-4 md:px-[70px]">
            <div className="w-full my-4">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center mt-5">
              <Button text="Reset Password" className="w-max px-10 md:px-14" />
            </div>
          </form>
          <div className="px-4 md:px-[70px]">
            <p className="pb-[56px] flex justify-end">
              <span>
                <img src={backArrow} alt="backArrow" className="" />
              </span>
              <span>Go back to</span>
              <Link
                className="text-[#421196] font-semibold ml-2 text-center"
                to={"/"}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default InfoResetPassword;
