import React from "react";
import { NavLink, useLocation } from "react-router-dom";
export default function NavItem({ link, handleToggle }) {
  const activeNavStyles = "bg-[#F4EEFF] text-[#421196] cursor-pointer";
  const {pathname} = useLocation()
  // console.log(pathname)

  const notNavStyles = "flex gap-2";
  return (
    <li className="px-4 py-3">
      <NavLink
        to={link.url}
        onClick={handleToggle}
        className={({ isActive }) =>
          `w-full rounded flex gap-[10px] py-[12.5px] text-nowrap px-2 items-center ${
            pathname === link.url ? activeNavStyles : notNavStyles
          }`
        }
      >
        <p className="text-2xl">{link.icon}</p>
        {link.title}
      </NavLink>
    </li>
  );
}
