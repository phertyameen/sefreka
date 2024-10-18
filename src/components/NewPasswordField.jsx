import React, { useState } from "react";
import loginImg from "../assets/images/loginImg.svg";
import homeIcon from "../assets/images/homeIcon.svg";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";

const NewPasswordField = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if both fields are filled
    if (!formData.newPassword || !formData.confirmPassword) {
      alert("Both password fields are required.");
      return;
    }
    
    // Check if passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Proceed if validation passes
    navigate('/passwordSuccess');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:w-[55%]  mt-10">
      <div className="flex justify-between mb-[30px] md:mb-[60px]">
        <div></div>
        <div>
          <img src={logo} alt="selfreka logo" className="w-[100px] md:w-auto" />
        </div>
        <div className="">
        <MdHome className="h-[30px] w-[30px] text-[#421196]" />
        </div>
      </div>
      <div className="ml-[5%] xl:ml-[10%] mr-[8%] shadow-xl rounded-[9.79px]">
        <h1 className="text-center font-[Georgia] text-[47px] text-[#421196]">
          Reset password
        </h1>
        <form action="" className="w-full py-[45px] px-4 md:px-[70px]" onSubmit={handleSubmit}>
          <div className="w-full my-4">
            <Input
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="New password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="w-full my-4">
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="w-full my-4">
            <Button text="Reset Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordField;
