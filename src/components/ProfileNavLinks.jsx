import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const ProfileNavLinks = ({ links, activeNavStyles, notNavStyles, text }) => {
  const { pathname } = useLocation();

  return (
    <ul
      className={`h-max flex flex-col gap-[15px] md:gap-4 text-${text} divShadow text-nowrap`}
    >
      {links.map(({ title, url, src }, index) => {
        const active = pathname.endsWith(url);
        console.log(active);
        console.log(url, pathname);
        return (
          <li className="px-4 py-3" key={index}>
            <NavLink
              to={url}
              className={`rounded flex gap-[10px] p-3 w-full ${
                active ? activeNavStyles : notNavStyles
              }`}
            >
              <img src={src} alt={title} className="pr-[2.5px]" />
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default ProfileNavLinks;
