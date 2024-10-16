import React, { useEffect, useState } from "react";
import editIcon from "../assets/images/pencilIcon.svg";
import emailIcon from "../assets/images/emailIcon.svg";
import phoneIcon from "../assets/images/phoneIcon.svg";
import cakeIcon from "../assets/images/cakeIcon.svg";
import flagIcon from "../assets/images/flagIcon.svg";
import profileImage from "../assets/images/profilePic.png";

const ProfileInfo = ({ profileNav }) => {
  const [formData, setFormData] = useState({
    fName: "", // initial values
    lName: "",
    email: "",
    phone: "+2348012345678",
    occupation: "React Developer",
    country: "Nigeria",
    dob: "October 1st, 2023",
    gender: "female",
  });

  useEffect(() => {
    // Get user info from local storage
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUserInfo) {
      setFormData((prevData) => ({
        ...prevData,
        fName: storedUserInfo.fname,
        lName: storedUserInfo.lname,
        email: storedUserInfo.email,
      }));
    }
  }, []);

  const { fName, lName, email, phone, occupation, country, dob, gender } =
    formData;

  const [changeDetails, setChangeDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(profileImage);

  const onchange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onsubmit = (e) => {
    e.preventDefault();
    setChangeDetails(false); // Disable editing after submission
    console.log("Form data submitted:", formData); // Log form submission
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Update the profile image with the selected file
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full px-4 2xl:px-[68px] py-[26px] divShadow">
      <h3 className="text-[#421196] font-medium mb-[35px]">
        Personal Information
      </h3>
      <div className="flex-col-reverse md:flex-row justify-between mb-12">
        <div className="w-full block md:flex mb-[63px]">
          <img
            src={selectedImage}
            alt="profile"
            className="h-[126px] w-[126px] mr-4 rounded-full mb-5 md:mb-0"
          />
          <div className="w-full flex justify-between">
            {changeDetails ? (
              <div className="flex gap-4 items-center justify-end lg:mt-7">
                
                {/* Upload and Delete Avatar buttons */}
                <label className="w-max border border-[#79747E] rounded-full text-[#421196] px-[24px] py-[10px] cursor-pointer">
                  Upload New
                  <input
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                    className="hidden"
                  />
                </label>
                <button
                  className="bg-[#FBE077] text-[#421196] w-max rounded-full px-[24px] py-[10px]"
                  onClick={() => setSelectedImage(profileImage)} // Reset to default image
                >
                  Delete Avatar
                </button>
              </div>
            ) : (
              <div className="self-center px-3">
                <h2 className="text-2xl font-bold">
                  {fName} {lName}
                </h2>
                <p className="text-sm text-[#222222]">
                  <span>Flutterwave</span>. <span>{occupation}</span>
                </p>
              </div>
            )}
            <p
              className="md:mt-0 flex xl:mr-[27px] items-center gap-[13px] h-max text-[#421196] text-nowrap"
              onClick={() => {
                changeDetails && onsubmit();
                // setChangeDetails((prev) => !prev);
                setChangeDetails((prev) => {
                  // onEditChange(!prev); // Toggle edit mode in Profile.jsx
                  return !prev;
                });
              }}
            >
              <span className="inline-block h-[24px] w-[24px]">
                {!changeDetails && <img src={editIcon} alt="Edit Profile" />}
              </span>
              <span>{changeDetails ? "" : "Edit Profile"}</span>
            </p>
          </div>
        </div>

        <div>
          <form onSubmit={onsubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {changeDetails ? (
                <>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="fName">First Name</label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      className="profileInp"
                      value={fName}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="Jeremy"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="lName">Last Name</label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      className="profileInp"
                      value={lName}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="Anton"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      className={
                        changeDetails ? "profileInp" : "profileInActiveInp"
                      }
                      value={email}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="jeremyanton@gmail.com"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="phone">Phone No.</label>
                    <input
                      name="phone"
                      type="text"
                      id="phone"
                      className={
                        changeDetails ? "profileInp" : "profileInActiveInp"
                      }
                      value={phone}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="+2348012345678"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                      name="occupation"
                      type="text"
                      id="occupation"
                      className="profileInp"
                      value={occupation}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="Junior Product Designer"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="country">Country</label>
                    <input
                      name="country"
                      type="text"
                      id="country"
                      className={
                        changeDetails ? "profileInp" : "profileInActiveInp"
                      }
                      value={country}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="Nigeria"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      className={
                        changeDetails ? "profileInp" : "profileInActiveInp"
                      }
                      value={dob}
                      disabled={!changeDetails}
                      onChange={onchange}
                      placeholder="October 1st, 1990"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="gender">Gender</label>
                    <div className="grid grid-cols-2 space-x-4">
                      <div className="py-[13px] px-[18px] border border-[#42119680] rounded-[10px]">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          checked={gender === "male"}
                          onChange={onchange}
                        />
                        <label htmlFor="male">Male</label>
                      </div>
                      <div className="py-[13px] px-[18px] border border-[#42119680] rounded-[10px]">
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          checked={gender === "female"}
                          onChange={onchange}
                        />
                        <label htmlFor="female">Female</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex gap-4 items-center justify-end lg:mt-7">
                    <button onClick={() => setChangeDetails(false)} className="w-max border border-[#79747E] rounded-full text-[#421196] px-[24px] py-[10px]">
                      Discard
                    </button>
                    <button type="submit" className="bg-[#FBE077] text-[#421196] w-max rounded-full px-[24px] py-[10px]">
                      Save Changes
                    </button>
                  </div>
                </>
              ) : (
                // Display static values when not editing
                <>
                  <div className="text-[16px] font-bold flex gap-[15px] items-center">
                    <span>
                      {email !== "" && <img src={emailIcon} alt="" />}
                    </span>
                    <p>{email}</p>
                  </div>
                  <div className="text-[16px] font-bold flex gap-[15px] items-center">
                    <span>
                      {phone !== "" && <img src={phoneIcon} alt="" />}
                    </span>
                    <p>{phone}</p>
                  </div>
                  <div className="text-[16px] font-bold flex gap-[15px] items-center">
                    <span>{dob !== "" && <img src={cakeIcon} alt="" />}</span>
                    <p>{dob}</p>
                  </div>
                  <div className="text-[16px] font-bold flex gap-[15px] items-center">
                    <span>
                      {country !== "" && <img src={flagIcon} alt="" />}
                    </span>
                    <p>{country}</p>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
