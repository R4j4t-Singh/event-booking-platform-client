import React, { useEffect, useState } from "react";
import apiService from "../backend/api";
import { Link, useNavigate } from "react-router-dom";

function EventsList() {
  const [events, setEvents] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const events = await apiService.getEvents();
      setEvents(events);
    })();
  }, []);

  return (
    <div className="min-h-screen">
      {events.length > 0 ? (
        <div className="space-y-4 p-8">
          {/* <div className="flex justify-between">
            <p>S No.</p>
            <p>category</p>
            <p>title</p>
          </div> */}
          {events.map((event) => (
            <div
              className="flex justify-between bg-gray-400 p-2 "
              key={event.id}
            >
              <Link
                to={`/events/${event.id}`}
                className="flex space-x-6 rounded p-4"
              >
                <p>{event.id}</p>
                <p>{event.createdAt}</p>
                <p>{event.category}</p>
                <p>{event.title}</p>
                <p>{event.description.slice(0, 50)}</p>
              </Link>
              <button
                className="bg-red-600 hover:bg-red-700 rounded-xl text-white px-4 text-sm"
                onClick={() => {
                  navigate(`/admin/create/${event.id}/show`);
                }}
              >
                Add Show
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-4 text-3xl italic font-medium">
          No Events
        </div>
      )}
    </div>
  );
}

export default EventsList;
