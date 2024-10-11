import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import stars from "../assets/images/stars.svg";
import cardAdd from "../assets/images/cardAdd.svg";
import masterCardIcon from "../assets/images/masterCardIcon.svg";

const Subscription = ({ setShowAddCard }) => {
  const location = useLocation();
  const path = location.pathname.includes("subscriptionsect");
  return (
    <div className="lg:py-[26px] lg:px-[68px] py-4 px-2 shadow-xl">
      <h3 className="text-[#421196] font-medium">
        {path ? "Current Membership Plan" : "Payment Method"}
      </h3>
      <div>
        <div className="my-8 flex justify-between">
          <h2 className={`flex ${path ? "flex-row items-center" : "flex-col items-start"} text-2xl font-bold font-serif gap-2`}>
            <span>
              <img src={path ? stars : masterCardIcon} alt="" />
            </span>
            {path ? <span>SILVER</span> : <span className="text-[16px]">MasterCard ****8527</span>}
          </h2>
          <div>
            <Button className="px-6" text={"Change Plans"} />
          </div>
        </div>
        {path && <p>Monthly Billing: $20</p>}
        <div className="flex flex-col sm:flex-row gap-2 justify-between mt-2">
          <p>
            {path
              ? "Next Billing: November, 2023"
              : "This is your selected payment method"}
          </p>
          <Link className="text-[#421196]">
            {path ? (
              "Cancel Subscription"
            ) : (
              <div className="flex gap-1">
                <span>
                  <img src={cardAdd} alt="" />
                </span>
                <span onClick={() => setShowAddCard(true)}>Add New Card</span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
