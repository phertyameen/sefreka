import { useState, useRef } from "react";
import logo from "../assets/images/logo.svg";
import backArrow from "../assets/images/backArrow.svg";
import homeIcon from "../assets/images/homeIcon.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function EmailVerificationModal({ handleOtpSubmit }) {
  const [otpValues, setOtpValues] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (/^\d$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Move focus to the next input
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpValues.every((digit) => digit !== "")) {
      const otpValue = otpValues.join("");
      console.log("Final OTP:", otpValue);
      handleOtpSubmit(otpValue);
    } else {
      alert("Please fill in all the OTP fields.");
    }
  };

  return (
    <div className="lg:w-[55%] mt-10">
      {/* Header Section */}
      <div className="flex justify-between mb-[30px] md:mb-[60px]">
        <div></div>
        <div>
          <img src={logo} alt="selfreka logo" className="w-[100px] md:w-auto" />
        </div>
        <div>
          <img className="w-[24px]" src={homeIcon} alt="home icon" />
        </div>
      </div>

      {/* Form Section */}
      <div className="ml-[5%] mr-[8%] shadow-xl rounded-[9.79px]">
        <h1 className="text-center font-[Georgia] text-[47px]">Reset Password</h1>
        <p className="text-center px-4 md:px-[70px]">
          Please enter the verification code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="w-full py-[45px] px-4 md:px-[70px]">
          <div className="flex space-x-2 justify-center my-4">
            {otpValues.map((value, index) => (
              <div key={index}>
                <input
                  type="text"
                  maxLength="1"
                  value={value}
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <Button text="Send" className="w-max px-10 md:px-14" />
          </div>
        </form>

        {/* Go Back Section */}
        <div className="px-4 md:px-[70px]">
          <p className="pb-[56px] flex justify-end">
            <span>
              <img src={backArrow} alt="backArrow" />
            </span>
            <span>Go back to</span>
            <Link className="text-[#421196] font-semibold ml-2 text-center" to={"/"}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}