import React, { useState } from "react";
import { Input } from "./";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import apiService from "../backend/api";

function EventForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const addEvent = async (data) => {
    try {
      await apiService.addEvent(data);
      navigate("/admin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-center bg-gray-800">
      <div className="w-full max-w-md bg-gray-100 rounded-xl p-8">
        <h2 className="text-center p-2 text-2xl font-bold">Create Event</h2>

        {error && (
          <p className=" text-sm text-red-500 font-medium text-center">
            {error}
          </p>
        )}

        <form
          className="text-center space-x-3 mt-4 space-y-4"
          onSubmit={handleSubmit(addEvent)}
        >
          <Input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />
          <div>
            <select
              name="category"
              className="bg-gray-200 w-full p-2 rounded"
              {...register("category", {
                required: true,
              })}
            >
              <option value="movie">Movie</option>
              <option value="concert">Concert</option>
              <option value="show">Show</option>
            </select>
          </div>
          <div>
            <textarea
              className="bg-gray-200 w-full p-2 rounded"
              rows="4"
              placeholder="Description"
              {...register("description")}
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

export default EventForm;
