import React, { useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "./";
import apiService from "../backend/api";

function ShowForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { id } = useParams();

  const addShow = async (data) => {
    try {
      await apiService.addShow(data, id);
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-md bg-gray-100 rounded-xl p-8">
        <h2 className="text-center p-2 text-2xl font-bold">Create Show</h2>

        {error && (
          <p className=" text-sm text-red-500 font-medium text-center">
            {error}
          </p>
        )}

        <form
          className="text-center space-x-3 mt-4 space-y-4"
          onSubmit={handleSubmit(addShow)}
        >
          <Input
            type="text"
            placeholder="Venue"
            {...register("venue", {
              required: true,
            })}
          />
          <div>
            <Input
              type="datetime-local"
              {...register("startTime", {
                required: true,
              })}
            />
          </div>
          <div>
            <Input
              type="datetime-local"
              {...register("endTime", {
                required: true,
              })}
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Total Seats"
              {...register("totalSeats", {
                required: true,
              })}
            />
          </div>
          <button
            className="bg-blue-500 p-2 w-full rounded text-white hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShowForm;
