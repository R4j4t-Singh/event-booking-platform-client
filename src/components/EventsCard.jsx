import React, { useEffect, useState } from "react";
import apiService from "../backend/api";
import { Card, SearchBox } from "./";

function EventsCard() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventData = await apiService.getEvents();
    // console.log(eventData);
    setEvents(eventData);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <h1 className=" text-4xl text-white text-center p-6 italic">
        Book your seats NOW!!
      </h1>
      <div className="flex justify-center">
        <SearchBox />
      </div>
      <div className="w-full p-4 mt-5 grid grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="flex justify-center">
            <Card {...event} />
          </div>
        ))}
      </div>
    </>
  );
}

export default EventsCard;
