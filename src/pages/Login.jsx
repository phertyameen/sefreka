import React, { useState } from "react";
import loginImg from "../assets/images/loginImg.svg";
import { MdHome } from "react-icons/md";
import googleBtn from "../assets/images/googleIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const signUp = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      navigate("/dashboard");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:max-h-[1164px] lg:max-w-[1512px] lg:min-h-screen lg:items-center lg:justify-center m-auto">
      <div className="hidden lg:flex w-[45%] min-h-screen">
        <img
          src={loginImg}
          alt=""
          className="w-full object-cover min-h-screen"
        />
      </div>
      <div className="lg:w-[55%] mt-10">
        <div className="ml-[85%] mb-[57px]">
          <MdHome className="h-[30px] w-[30px] text-[#421196]" />
        </div>
        <div className="ml-[5%] mr-[8%] shadow-xl rounded-[9.79px]">
          <h1 className="text-center font-[Georgia] text-[47px] text-[#421196]">
            Welcome Back
          </h1>
          <p className="text-center">Login to continue</p>
          <form className="w-full py-[45px] px-4 md:px-[70px]" onSubmit={signUp}>
            <div className="w-full my-4">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="w-full my-4">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className="w-full my-4 md:flex justify-between">
              <div>
                <input
                  className="py-4 px-5 border rounded-[5px] border-[#421196] outline-none"
                  type="checkbox"
                  name="checkbox"
                />
                <label className="inline pl-4 text-[#421196]">Remember me</label>
              </div>
              <Link to={"/forgotpassword"} className="text-[#421196]">
                Forgot your Password?
              </Link>
            </div>
            <div className="w-full my-4">
              <Button text="Login" />
            </div>
          </form>
          <div className="px-[10%]">
            <div className="relative">
              <hr className="h-[1px] bg-gray-900" />
              <span className="bg-white text-[13.7px] absolute top-[-11px] left-[50%] px-4 transform -translate-x-1/2 text-nowrap">
                or continue with
              </span>
            </div>
            <button className="shadow-xl rounded-[9px] mx-auto text-[#421196] flex gap-3 py-[13.5px] px-[17.6px] my-[40px]">
              <img src={googleBtn} alt="google icon" /> Google
            </button>
            <p className="text-center pb-[56px]">
              Don't have an account?
              <Link className="text-[#421196] font-semibold ml-2 text-center" to={"/"}>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
