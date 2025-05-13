import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components";
import { useForm } from "react-hook-form";
import { setUser } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../backend/auth";

function SignupForm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = (data) => {
    setError("");
    try {
      authService.register(data);
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="bg-gray-800 p-6 flex items-center justify-center w-full min-h-screen">
      <div className="bg-gray-100 p-8 rounded-xl mb-2 max-w-sm w-full">
        <h2 className="text-center text-2xl font-bold p-2">Register</h2>
        <span className="flex justify-center space-x-1 p-2">
          <p>Already have a Account</p>{" "}
          <Link to="/login" className="font-medium hover:underline">
            Log In
          </Link>
        </span>
        {error && <p className=" text-sm text-red-500">{error}</p>}
        <form
          className="text-center space-x-3 mt-4 space-y-4"
          onSubmit={handleSubmit(login)}
        >
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <Input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 w-full rounded text-white hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
