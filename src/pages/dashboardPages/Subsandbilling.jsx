import React, { useState } from "react";
import ProfileNavLinks from "../../components/ProfileNavLinks";
import { useLocation } from "react-router-dom";
import doubleFoward from "../../assets/images/doubleFowardIcon.svg";
import subsIcon from "../../assets/images/subsIcon.svg";
import cardIcon from "../../assets/images/cardIcon.svg";
import Subscription from "../../components/Subscription";
import AddCard from "../../components/AddCard";

const Subsandbilling = () => {
  const location = useLocation();
  const activeNavStyles = "bg-[#F4EEFF] text-[#421196] cursor-pointer";
  const notNavStyles = "flex gap-2";

  const [showAddCard, setShowAddCard] = useState(false);

  // state to track edit mode
  // const [isEditPage, setIsEditPage] = useState(false);

  const links = [
    { title: "Subscription", url: "subscriptionsect", src: subsIcon },
    { title: "Billing", url: "addcard", src: cardIcon },
  ];

  const profileNav = links.map(
    (link) => location.pathname.includes(link.url) && link.title
  );

  return (
    <main className="mt-[46px] mx-4 lg:mx-6 md:ml-[54px] lg:px-6">
      <div className="flex gap-[10px] text-[#421196]">
        <h3>Profile Setting</h3>
        <img src={doubleFoward} alt="" />
        <p>{profileNav}</p>
        {/* {isEditPage && <img src={doubleFoward} />} */}
        {/* <p>{isEditPage ? "editpage" : ""}</p> */}
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-[max-content_1fr] gap-2 xl:gap-12 md:flex-row rounded-lg mt-[46px] justify-between">
        <ProfileNavLinks
          links={links}
          activeNavStyles={activeNavStyles}
          notNavStyles={notNavStyles}
        />
        <>
          {/* {location.pathname.includes("subscriptionsect") ? <Subscription /> : <Billing />} */}
          {/* Toggle between Subscription and AddCard components */}
          {showAddCard ? <AddCard setShowAddCard = {setShowAddCard} /> : <Subscription setShowAddCard={setShowAddCard} />}
        </>
      </div>
    </main>
  );
};

export default Subsandbilling;
