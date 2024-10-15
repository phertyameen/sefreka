import React from "react";
import logo from "../assets/images/logo.svg";
import dashboardIcon from "../assets/images/dashboardIcon.svg";
import searchIcon from "../assets/images/searchIcon.svg";
import notificationBell from "../assets/images/notificationBell.svg";
import profilePic from "../assets/images/profilePic.png";
import styled from "styled-components";

const Header = ({ handleToggle }) => {

  const StyleHeader = styled.nav`
    background-color: #fff;
    height: 82px;
    padding: 19px 52px;
    border-bottom: 1px solid #ddd;
    color: #421196;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px 0px #00000033;
    position: sticky;
    @media (max-width: 768px) {
      padding: 19px 5px;
    }
  `;

  return (
    <StyleHeader>
      <button
          className="flex md:hidden text-white p-4"
          onClick={handleToggle}
        >
          <img src={dashboardIcon} alt="Menu Icon" className="w-8 h-8" />
        </button>
      <div className="flex gap-36">
        <img src={logo} alt="logo" className="hidden sm:inline-block"/>
        <div className="hidden md:flex gap-[10px] align-middle py-[50%]">
          <img src={dashboardIcon} alt="" className="w-[26.25px] h-[26.25px]" />
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="flex gap-[92px]">
        <div className="hidden relative md:block w-[328px] h-[48px]">
            <img src={searchIcon} alt="search icon" className="absolute left-0 ml-[24px] translate-y-1/2"/>
            <input type="search" name="searchInp" id="searchInp" className="h-full w-full rounded-lg border border-[#795CD0] px-2 py-[17px]" />
        </div>
        <div className="flex gap-6 pr-3 items-center">
            <img src={notificationBell} alt="bell" />
            <div className="flex gap-[9.5] items-center">
                <div className="w-9 h-9 rounded-full bg-[#795CD0]">
                    <img src={profilePic} alt="" className="rounded-full"/>
                </div>
                <p className="text-nowrap ml-2">Jeremy Anton</p>
            </div>
        </div>
      </div>
    </StyleHeader>
  );
};

export default Header;
