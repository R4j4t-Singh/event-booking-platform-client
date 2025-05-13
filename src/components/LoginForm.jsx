import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components";
import { useForm } from "react-hook-form";
import { setUser } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../backend/auth";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (data) => {
    setError("");
    try {
      const token = await authService.login(data);
      // console.log(token);
      if (token) {
        dispatch(
          setUser({
            email: data.email,
            admin: true,
          })
        );
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="bg-gray-800 p-6 flex items-center justify-center w-full min-h-screen">
      <div className="bg-gray-100 p-8 rounded-xl mb-2 max-w-sm w-full">
        <h2 className="text-center text-2xl font-bold p-2">Login</h2>
        <span className="flex justify-center space-x-1 p-2">
          <p>Don't have a Account</p>{" "}
          <Link to="/signup" className="font-medium hover:underline">
            Sign Up
          </Link>
        </span>
        {error && (
          <p className=" text-sm text-red-500 font-medium text-center">
            {error}
          </p>
        )}
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
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 w-full rounded text-white hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
