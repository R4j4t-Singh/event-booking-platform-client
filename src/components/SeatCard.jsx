import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat, removeSeat } from "../store/showSlice";

function SeatCard({ id, seatNumber, bgColor, isDisabled }) {
  const [color, setColor] = useState(bgColor);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isSelected) {
      dispatch(removeSeat(id));
      setColor(bgColor);
      setIsSelected(false);
    } else {
      dispatch(selectSeat({ id, seatNumber }));
      setColor("bg-green-600");
      setIsSelected(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      key={id}
      className={`text-white ${color} p-3 mt-2 rounded-xl w-5/6`}
    >
      {seatNumber}
    </button>
  );
}

export default SeatCard;
