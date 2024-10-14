import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import doubleFoward from "../../assets/images/doubleFowardIcon.svg";
import profileIcon from "../../assets/images/profileIcon.svg";
// import { ProfileIcon } from "../../assets/images/icons";
import lock from "../../assets/images/lock.svg";
import ProfileNavLinks from "../../components/ProfileNavLinks";
// import ProfileInfo from "../../components/ProfileInfo";
// import EditPassword from "../../components/EditPassword";

const Profile = () => {
  const location = useLocation();
  const activeNavStyles = "bg-[#F4EEFF] text-[#421196] cursor-pointer";
  const notNavStyles = "flex gap-2";

  // state to track edit mode
  const [isEditPage, setIsEditPage] = useState(false);

  const links = [
    {
      title: "Personal Information",
      url: "/dashboard/profile/profileinfo",
      src: profileIcon,
    },
    { title: "Password Change", url: "changepassword", src: lock },
  ];

  const profileNav = links.map(
    (link) => location.pathname.includes(link.url) && link.title
  );

  return (
    <main className="mt-[46px] mx-4 lg:mx-6 md:ml-[54px]">
      <div className="flex gap-[10px] text-[#421196]">
        <h3>Profile Setting</h3>
        <img src={doubleFoward} alt="" />
        <p>{profileNav}</p>
        {isEditPage && <img src={doubleFoward} />}
        <p>{isEditPage ? "editpage" : ""}</p>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-[max-content_1fr] gap-2 xl:gap-12 md:flex-row rounded-lg mt-[46px] justify-between">
        <ProfileNavLinks
          links={links}
          activeNavStyles={activeNavStyles}
          notNavStyles={notNavStyles}
        />
        <>
          {/* {location.pathname.includes("personalinfo") ? <ProfileInfo onEditChange={(isEdit) => setIsEditPage(isEdit)} profileNav={profileNav} /> : <EditPassword profileNav={profileNav} />} */}
          <Outlet />
        </>
      </div>
    </main>
  );
};

export default Profile;
