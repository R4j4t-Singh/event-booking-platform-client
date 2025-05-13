import React from "react";
import { Logo } from "../";
import { useSelector } from "react-redux";
import LoginButton from "./LoginButton";
import ProfileLogo from "./ProfileLogo";

const Header = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <header className="w-full flex items-center justify-between px-6 py-2 bg-gray-500 shadow-md">
      <div>
        <Logo />
      </div>
      <div>
        {user && (
          <div className="flex space-x-2">
            <ProfileLogo />
          </div>
        )}
        {!user && <LoginButton />}
      </div>
    </header>
  );
};

export default Header;
