import React, { useState } from "react";
import masterCard from "../assets/images/masterCardIcon.svg"
import visa from "../assets/images/visaIcon.svg"
import cardAdd from "../assets/images/cardAdd.svg"


const AddCard = () => {
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNo: "",
    expDate: "",
    cvcPassword: ""
  });

  const onsubmit = () => {};

  const onchange = () => {};
  const { cardHolderName, cardNo, expDate, cvcPassword } = formData;
  return (
    <div className="mx-1 shadow-lg px-5 py-8 rounded">
      <h3 className="text-[#421196] font-medium mb-[35px]">
        <span>
          <img src={cardAdd} alt="" />
        </span>
        <span>Add New Card</span>
      </h3>
      <div className="flex gap-[10px] mb-7 text-base font-medium items-center">
        <input type="radio" name="cardOpt" id="cardOpt" />
        <span>Debit Card / Credit Card</span>
        <span><img src={masterCard} alt="" /></span>
        <span><img src={visa} alt="" /></span>
      </div>
      <form onSubmit={onsubmit}>
        <div className="grid gap-6 md:grid-row-2">
          <>
            <div className="col-span-1">
              <label htmlFor="cardHolderName">Cardholder Name</label>
              <input
                type="text"
                name="cardHolderName"
                id="cardHolderName"
                className="profileInp w-full"
                value={cardHolderName}
                onChange={onchange}
                placeholder="Input name"
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="cardNo">Card Number</label>
              <input
                type="text"
                name="cardNo"
                id="cardNo"
                className="profileInp w-full"
                value={cardNo}
                onChange={onchange}
                placeholder="Input card number"
              />
            </div>
            <div className="grid grid-rows-2 lg:grid-rows-1 gap-4 md:grid-cols-2 space-x-4">
              <div>
                <label htmlFor="expDate">Expiry Date</label>
                <input
                  type="date"
                  name="expDate"
                  id="expDate"
                  className="profileInp"
                  value={expDate}
                  onChange={onchange}
                  placeholder="mm/yy"
                />
              </div>
              <div className="mr-[-7px]">
                <label htmlFor="cvcPassword">CVC</label>
                <input
                  type="Password"
                  name="cvcPassword"
                  id="cvcPassword"
                  className="profileInp"
                  value={cvcPassword}
                  onChange={onchange}
                  placeholder="***"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center justify-end lg:mt-7">
              <button className="w-max border-2 border-[#79747E] rounded-full text-[#421196] px-[24px] py-[10px]">
                Discard
              </button>
              <button className="bg-[#FBE077] text-[#421196] w-max rounded-full px-[24px] py-[10px]">
                Save Changes
              </button>
            </div>
          </>
        </div>
      </form>
    </div>
  );
};

export default AddCard
