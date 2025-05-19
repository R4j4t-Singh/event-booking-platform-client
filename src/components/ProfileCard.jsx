import React, { useEffect, useState } from "react";
import authService from "../backend/auth";
import bookingService from "../backend/booking";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { dateFormat } from "../util/DateFormat";

function ProfileCard() {
  const [bookings, setBookings] = useState({});
  const user = useSelector((state) => state.authReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const bookings = await bookingService.getBookings();
      setBookings(bookings);
    })();
  }, []);

  return (
    <div className=" min-h-screen p-8 bg-gray-400">
      {user.role === "ADMIN" && (
        <button
          className={`text-white bg-blue-500 rounded px-4 py-2 hover:bg-blue-600`}
          onClick={() => navigate("/admin")}
        >
          Admin
        </button>
      )}
      <div className="w-full p-5">
        <h2 className="text-center text-3xl">User Profile</h2>
        <div className="p-8 grid grid-cols-2 space-x-6">
          <div className="p-8 bg-white rounded-xl">
            <span className="flex justify-between px-4 py-2">
              <p>Name: </p>
              <p>{user.name}</p>
            </span>
            <span className="flex justify-between px-4 py-2">
              <p>Email: </p>
              <p>{user.email}</p>
            </span>
            <span className="flex justify-between px-4 py-2">
              <p>Mobile No: </p>
              <p>{user.mobileNo}</p>
            </span>
          </div>
          <div className=" p-8 bg-white rounded-xl">
            <span className="flex justify-between px-4 py-2">
              <p>Name: </p>
              <p>{user.name}</p>
            </span>
            <span className="flex justify-between px-4 py-2">
              <p>Email: </p>
              <p>{user.email}</p>
            </span>
            <span className="flex justify-between px-4 py-2">
              <p>Mobile No: </p>
              <p>{user.mobileNo}</p>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t p-5 w-full">
        <h2 className="text-center text-3xl">My Bookings</h2>

        {bookings.length > 0 ? (
          <div className="p-8 grid grid-cols-2 space-x-6 space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="space-y-8 p-8 bg-white rounded-xl"
              >
                <div>
                  <span className="flex justify-between px-4 py-2">
                    <p>Booking Id: </p>
                    <p>{booking.id}</p>
                  </span>
                  <span className="flex justify-between px-4 py-2">
                    <p>Booked On: </p>
                    <p>{dateFormat(booking.bookingTime)}</p>
                  </span>
                  <span className="flex justify-between px-4 py-2">
                    <p>Event: </p>
                    <p>{booking.event}</p>
                  </span>
                  <span className="flex justify-between px-4 py-2">
                    <p>Venue: </p>
                    <p>{booking.venue}</p>
                  </span>
                  <span className="flex justify-between px-4 py-2">
                    <p>Timing: </p>
                    <p>
                      {dateFormat(booking.startTime)} -{" "}
                      {dateFormat(booking.endTime)}
                    </p>
                  </span>
                  <span className="flex justify-between px-4 py-2">
                    <p>Seats: </p>
                    <div className="flex space-x-2">
                      {booking.seats.map((seat) => (
                        <p key={seat} className="flex">
                          {seat}
                        </p>
                      ))}
                    </div>
                  </span>
                  <span className="flex justify-between px-4 py-2">
                    <p>Status: </p>
                    <p>{booking.status}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl p-8 text-gray-900 italic">
            No Bookings
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
