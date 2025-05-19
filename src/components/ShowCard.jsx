import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../store/showSlice";
import { dateFormat } from "../util/DateFormat";

function ShowCard({ id, venue, startTime, endTime }) {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(setShow({ id, venue, startTime, endTime }));
  };

  return (
    <button
      onClick={() => handleClick(id)}
      className=" bg-gray-600 px-4 py-2 text-gray-200 rounded hover:bg-gray-800 flex justify-between w-full"
    >
      <h3 className="font-bold">{venue}</h3>
      <p>
        {dateFormat(startTime)} - {dateFormat(endTime)}
      </p>
    </button>
  );
}

export default ShowCard;
