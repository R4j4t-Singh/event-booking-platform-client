import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function ProfileLogo() {
  const user = useSelector((state) => state.authReducer.user);
  const [open, setOpen] = useState(false);

  return (
    <div className="p-1">
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
          width="40px"
          className="rounded-4xl"
          onClick={() => {
            setOpen((open) => !open);
          }}
        ></img>
      </div>
      <p className="text-center p-1 text-xs font-light text-white ">
        {user.email}
      </p>
      <div className="flex justify-center">
        {open && (
          <div className=" absolute w-30 bg-gray-200 rounded">
            <Link to="/profile">
              <div className="text-center text-sm border-y p-1 hover:bg-gray-400">
                My Profile
              </div>
            </Link>
            <div className="flex justify-center p-1 hover:bg-gray-400">
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileLogo;
