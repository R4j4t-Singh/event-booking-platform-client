import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, description, category, imageUrl }) {
  return (
    <div className="text-center p-6 bg-gray-500 m-5 rounded-2xl">
      <Link to={`/events/${id}`}>
        <div className="flex justify-center p-2 h-90">
          <img src={imageUrl} className=" rounded-xl" />
        </div>
        <div>
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="italic text-sm">{description}</p>
          <p className="font-bold text-sm">{category}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
