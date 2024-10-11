import { useState } from "react";
import resetPassword from "../assets/images/resetPassword.svg";
import InfoResetPassword from "../components/InfoResetPassword";
import EmailVerificationModal from "../components/EmailVerificationModal";
import NewPasswordField from "../components/NewPasswordField";

const ResetPassword = () => {
    const [showEmailVerification, setShowEmailVerification] = useState(false); // State to toggle modal
    const [showNewPasswordField, setShowNewPasswordField] = useState(false);

  const handleShowEmailVerification = () => {
    setShowEmailVerification(true); // Show the EmailVerificationModal when called
  };

  const handleOtpSubmit = (otpValue) => {
    console.log("OTP Submitted:", otpValue);
    setShowNewPasswordField(true); // Show the NewPasswordField on OTP submission
  };

  return (
    <div className="flex flex-col lg:flex-row lg:max-h-[1164px] lg:max-w-[1512px] lg:h-screen lg:min-items-center lg:justify-center m-auto">
      <div className="hidden lg:flex w-[45%] min-h-screen bg-custom-gradient">
        <img
          src={resetPassword}
          alt=""
          className="w-3/4 self-center h-3/4 object-cover m-auto"
        />
      </div>
      {/* Conditionally render the components */}
      {showNewPasswordField ? (
        <NewPasswordField />
      ) : showEmailVerification ? (
        <EmailVerificationModal handleOtpSubmit={handleOtpSubmit} />
      ) : (
        <InfoResetPassword onResetPasswordClick={handleShowEmailVerification} />
      )}
    </div>
  );
};

export default ResetPassword;
