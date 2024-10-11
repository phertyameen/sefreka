import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideNav from "../components/SideNav";
import Header from "../components/Header";

const DashboardLayout = () => {
  const [isopen, setIsopen] = useState(window.innerWidth > 900);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsopen(window.innerWidth > 900);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const DashboardLayout = styled.div`
    display: grid;
    grid-template-rows: max-content 1fr;
    min-height: 100vh;
  `;
  const Main = styled.main`
    position: relative;
    display: grid;
    grid-template-columns: max-content 1fr;
    min-height: 100vh;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  const handleToggle = () => {
    if (window.innerWidth < 900) {
      setIsopen(!isopen);
    console.log("Toggle clicked!");
    }
  };

  return (
    <DashboardLayout>
      <Header handleToggle={handleToggle} />
      <Main>
        <SideNav isopen={isopen} handleToggle={handleToggle} />
        <Outlet />
      </Main>
    </DashboardLayout>
  );
};

export default DashboardLayout;
