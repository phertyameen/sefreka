import React, { useState } from "react";
// import Button from "../components/Button";

const EditPassword = ({ profileNav }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    currentPassword: "",
    confirmPassword: "",
  });

  const onsubmit = () => {};

  const onchange = () => {};
  const { newPassword, currentPassword, confirmPassword } = formData;
  return (
    <div className="mx-1 shadow-lg px-5 py-8 rounded">
      <h3 className="text-[#421196] font-medium mb-[35px]">Password Change</h3>
      <form onSubmit={onsubmit}>
        <div className="grid gap-6 md:grid-row-2">
          <>
            <div className="col-span-1">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="currentPassword"
                name="currentPassword"
                id="currentPassword"
                className="profileInp w-full"
                value={currentPassword}
                onChange={onchange}
                placeholder="******"
              />
            </div>
            <div className="grid grid-rows-2 lg:grid-rows-1 gap-4 md:grid-cols-2 space-x-4">
              <div>
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="newPassword"
                  name="newPassword"
                  id="newPassword"
                  className="profileInp"
                  value={newPassword}
                  onChange={onchange}
                  placeholder="******"
                />
              </div>
              <div className="mr-[-7px]">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="profileInp"
                  value={confirmPassword}
                  onChange={onchange}
                  placeholder="******"
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

export default EditPassword;
