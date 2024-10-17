import React, { useState } from "react";
import signupImg from "../assets/images/signupImg2.svg";
import { MdHome } from "react-icons/md";
import googleBtn from "../assets/images/googleIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { auth, provider, signInWithPopup } from "../../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fname) {
      newErrors.fname = "First Name is required";
    }

    if (!formData.lname) {
      newErrors.lname = "Last Name is required";
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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

      // Store user info in local storage
    const userInfo = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

      navigate("communities");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Google Sign-In Handler
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      
      // Extracting user information
    const userInfo = {
      fname: result.user.displayName.split(" ")[0], // First Name
      lname: result.user.displayName.split(" ").slice(1).join(" "), // Last Name (if multiple parts)
      email: result.user.email,
      uid: result.user.uid, // for identifying the user uniquely
      photoURL: result.user.photoURL, //for displaying profile picture
    };

    // Store user info in local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // Navigate or take action after successful sign-in
      navigate("/communities");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:max-h-[1164px] w-fit lg:max-w-[1512px] lg:min-h-screen lg:items-center lg:justify-center m-auto">
      <div className="hidden lg:flex w-[45%] min-h-screen">
        <img src={signupImg} alt="" className="w-full object-cover min-h-screen" />
      </div>
      <div className="lg:w-[55%] mt-10">
        <div className="ml-[85%] mb-[57px]">
          <MdHome className="h-[30px] w-[30px] text-[#421196]" />
        </div>
        <div className="ml-[5%] mr-[8%] shadow-xl rounded-[9.79px]">
          <h1 className="text-center font-[Georgia] text-[47px] text-[#421196]">
            Welcome
          </h1>
          <p className="text-center">Sign Up To Continue</p>
          <form onSubmit={signUp} className="w-full py-[45px] px-4 md:px-[70px]">
            <div className="md:flex gap-4 my-4 w-full justify-between">
              <div className="my-4 md:w-[50%]">
                <Input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && <p className="text-red-500">{errors.fname}</p>}
              </div>
              <div className="my-4 md:w-[50%]">
                <Input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                />
                {errors.lname && <p className="text-red-500">{errors.lname}</p>}
              </div>
            </div>
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
            <div className="w-full my-4">
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
            </div>
            <div className="w-full my-4">
              <input
                className="py-4 px-5 border rounded-[5px] border-[#421196] outline-none"
                type="checkbox"
                name="checkbox"
              />
              <p className="inline pl-4 text-[#421196]">
                Creating an account means you are okay with our Terms of Services,
                Privacy Policy, and conditions.
              </p>
            </div>
            <div className="w-full my-4">
              <Button text="Sign Up" />
            </div>
          </form>
          <div className="px-[10%]">
            <div className="relative">
              <hr className="h-[1.5px] bg-gray-900" />
              <span className="bg-white text-[13.7px] absolute top-[-11px] left-[50%] px-4 transform -translate-x-1/2 text-nowrap">
                or continue with
              </span>
            </div>
            <button onClick={signInWithGoogle} className="shadow-xl rounded-[9px] mx-auto text-[#421196] flex gap-3 py-[13.5px] px-[17.6px] my-[40px]">
              <img src={googleBtn} alt="google icon" /> Google
            </button>
            <p className="text-center pb-[56px]">
              Already have an account?
              <Link className="text-[#421196] font-semibold ml-2 text-center" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
