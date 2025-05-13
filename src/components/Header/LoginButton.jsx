import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="px-6 py-2 text-XL txt-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}

export default LoginButton;
