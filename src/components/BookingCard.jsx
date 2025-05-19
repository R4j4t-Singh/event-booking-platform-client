import React, { useState } from "react";
import { useSelector } from "react-redux";
import bookingService from "../backend/booking";
import { dateFormat } from "../util/DateFormat";

function BookingCard() {
  const show = useSelector((state) => state.showReducer.show);
  const seats = useSelector((state) => state.showReducer.seats);
  const [error, setError] = useState("");
  const [bookingId, setBookingId] = useState("");

  const handleSubmit = () => {
    setError("");
    (async () => {
      try {
        const bookingId = await bookingService.book({
          showId: show.id,
          seats: seats,
        });
        setBookingId(bookingId);
      } catch (error) {
        setError(error.message);
      }
    })();
  };

  return (
    <div className="flex p-6 justify-center items-center w-full min-h-screen bg-gray-400">
      <div className="max-w-md p-8 w-full border-1 mb-4 rounded-xl space-y-4 bg-gray-200">
        <div className="text-center font-medium">
          {error && <h2 className="text-red-500">{error}</h2>}
          {bookingId && (
            <span>
              <p className="italic text-green-500">Success!!</p>
              <p className="">Booking Id: {bookingId}</p>
            </span>
          )}
        </div>
        <h2 className="text-2xl text-center font-bold p-2">Booking Details</h2>
        <div className="space-y-2 p-6">
          <span className="flex justify-between">
            Venue : <p>{show.venue}</p>
          </span>
          <span className="flex justify-between">
            Start Time : <p>{dateFormat(show.startTime)}</p>
          </span>
          <span className="flex justify-between">
            End Time : <p>{dateFormat(show.endTime)}</p>
          </span>
          <div className="flex justify-between">
            <p>Seats : </p>
            <div className="space-x-2 flex">
              {seats.map((seat) => (
                <p key={seat.id}>{seat.seatNumber}</p>
              ))}
            </div>
          </div>
        </div>
        <button
          className="w-full p-2 bg-blue-500 rounded text-white font-medium hover:bg-blue-600"
          onClick={handleSubmit}
          disabled={bookingId}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default BookingCard;
