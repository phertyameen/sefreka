import passwordShield from "../assets/images/passwordShield.svg";
import homeIcon from "../assets/images/homeIcon.svg";
import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PasswordSuccess = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col lg:flex-row lg:max-h-[1164px] lg:max-w-[1512px] lg:min-h-screen lg:items-center lg:justify-center m-auto">
      <div className="hidden lg:flex w-[45%] min-h-screen bg-custom-gradient">
        <img
          src={passwordShield}
          alt=""
          className="w-3/4 self-center h-3/4 object-cover m-auto"
        />
      </div>
      <div className="lg:w-[55%]  mt-3 flex flex-col gap-36">
        <div className="flex justify-between mb-[30px] md:mb-[60px]">
          <div className="ml-[30px]">
            <img
              src={logo}
              alt="selfreka logo"
              className="w-[100px] md:w-auto"
            />
          </div>
          <div className="">
            <img className="w-[24px]" src={homeIcon} alt="home icon" />
          </div>
        </div>

        <div className="ml=[5%] mr-[8%] md:ml-[15%] md:mr-[18%] shadow-xl rounded-[9.79px] pb-20">
          <h1 className="text-center text-[47px] h">
            Password Reset Successfully
          </h1>
          <p className="text-center px-4 md:px-[70px]">
            Your password has been successfully reset. Click below to log in
          </p>
          <div className="flex justify-center mt-[125px]">
            <Button
              text="Login"
              onClick={() => navigate("/login")}
              className="w-max px-10 md:px-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccess;
