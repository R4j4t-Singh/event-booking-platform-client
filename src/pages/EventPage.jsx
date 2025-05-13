import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiService from "../backend/api";
import { ShowCard, SeatCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { resetShow } from "../store/showSlice";

function EventPage() {
  const { id } = useParams();

  const [event, setEvent] = useState({});
  const [shows, setShows] = useState([]);
  const [seats, setSeats] = useState([]);

  const show = useSelector((state) => state.showReducer.show);
  const selectedSeats = useSelector((state) => state.showReducer.seats);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getEvent = async () => {
    const event = await apiService.getEvent(id);
    setEvent(event);
  };

  const getShows = async () => {
    const shows = await apiService.getShows(id);
    setShows(shows);
  };

  useEffect(() => {
    dispatch(resetShow());
    getEvent();
    getShows();
  }, []);

  useEffect(() => {
    if (show) {
      (async () => {
        const seats = await apiService.getSeats(show.id);
        setSeats(seats);
      })();
    } else {
      setSeats(null);
    }
  }, [show]);

  return (
    <div className="bg-gray-800 p-6">
      <div className=" bg-gray-400 p-8 rounded-2xl">
        <div className="grid grid-cols-2 mt-4">
          <div>
            <img
              src={event.imageUrl}
              width="700px"
              className=" rounded-xl p-4"
            />
          </div>

          <div className="mt-2 px-8 py-2">
            <div className="flex justify-between bg-red-600 text-black rounded-2xl">
              <h1 className="text-3xl font-bold p-4">{event.title}</h1>
              <p className="px-4 pt-8 text-sm font-bold ">{event.category}</p>
            </div>
            <p className="px-4 py-2 italic">{event.description}</p>
            <div className="p-2">
              {shows.length > 0 && (
                <div className="space-y-2">
                  {shows.map((show) => (
                    <ShowCard key={show.id} {...show} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 mt-5">
          {seats && (
            <div className="text-center">
              <h2 className="text-xl font-medium italic">Select Your seats</h2>
              <div className="grid grid-cols-5 space-x-3 text-center mt-3 p-2">
                {seats.map((seat) => (
                  <SeatCard
                    key={seat.id}
                    id={seat.id}
                    seatNumber={seat.seatNumber}
                    bgColor={
                      seat.status === "AVAILABLE" ? "bg-blue-600" : "bg-red-600"
                    }
                    isDisabled={seat.status === "BOOKED" ? true : false}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {selectedSeats.length > 0 && (
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white p-4 rounded-xl"
              onClick={() => navigate("/booking")}
            >
              Book Your seats
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventPage;
