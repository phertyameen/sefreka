// import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import { sideNnavLinks } from "../assets/images/icons";
import { useLocation } from "react-router-dom";

const SideNav = ({ isopen, handleToggle }) => {
  const location = useLocation()
  
  const SideNavWrapper = styled.nav.attrs(({ isopen }) => ({
    style: {
      transform: isopen ? "translateX(0)" : "translateX(-100%)",
    },
  }))`
    background: linear-gradient(260.46deg, #421196 0%, #795cd0 100%);
    color: #fff;
    width: max-content;
    padding: 42px 42px;
    border-bottom: 1px solid #ddd;
    min-height: 91.99vh;
    display: block;
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      padding-top: 60px;
      transform: ${({ isopen }) =>
        isopen ? "translateX( 0)" : "translateX(-100%)"};
      transition: transform 0.3s ease-in-out;
    }`
  ;

  return (
    <SideNavWrapper isopen={isopen}>
      <ul className="flex flex-col gap-[15px] md:gap-4">
        
        {sideNnavLinks.map((link, index) => (
          <NavItem link={link} key={index} handleToggle={handleToggle}/>
        ))}
      </ul> 
    </SideNavWrapper>
  );
};

export default SideNav;