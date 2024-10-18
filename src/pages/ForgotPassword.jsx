import React, { useState } from "react";
import resetPassword from "../assets/images/forgotPassword.svg";
import homeIcon from "../assets/images/homeIcon.svg";
import logo from "../assets/images/logo.svg";
import backArrow from "../assets/images/backArrow.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { MdHome } from "react-icons/md";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[1512px] lg:min-h-screen lg:items-center lg:justify-center mx-auto">
      <div className="hidden lg:flex min-h-screen h-full bg-[#4C1FA1]">
        <img
          src={resetPassword}
          alt=""
          className="w-[500px] self-center h-full object-contain m-auto"
        />
      </div>

      <div className="bg-white pt-10 px-4 md:px-[40px] lg:px-[69px] py-[26px] mx-auto">
        {/* Top Header */}
        <div className="flex justify-between mb-[30px] md:mb-[60px] items-center">
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

        {/* Form Content */}
        <div className="mx-auto w-full md:w-[80%] lg:w-[100%] shadow-xl rounded-[9.79px] p-4 lg:p-8">
          <h1 className="text-center text-[32px] md:text-[40px] lg:text-[47px] mb-[40px] lg:mb-[72px]">
            Reset Password
          </h1>
          <div className="mb-[60px] lg:mb-[143px]">
            <h2 className="text-center text-[20px] md:text-[24px] mb-[20px] lg:mb-[27px]">
              Forgot your password?
            </h2>
            <p className="text-center px-4 md:px-[30px] lg:px-[70px] text-[14px] md:text-[16px]">
              It’s okay if you forgot your password, click on the button below
              to
              <Link
                to={"/resetpassword"}
                className="text-[#421196] font-semibold ml-2"
              >
                reset your password
              </Link>
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-5">
            <Button
              text="Reset Password"
              onClick={() => navigate("/resetpassword")}
              className="w-max px-10 md:px-14"
            />
          </div>

          {/* Back Link */}
          <div className="mt-[40px] lg:mt-[51px] flex justify-center items-center">
            <span className="pr-2">
              <img src={backArrow} alt="backArrow" className="w-[16px]" />
            </span>
            <span className="text-[14px] md:text-[16px]">
              Go back to
              <Link
                className="text-[#421196] font-semibold ml-2"
                to={"/resetpassword"}
              >
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
