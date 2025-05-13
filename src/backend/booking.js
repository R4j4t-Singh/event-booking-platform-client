const url = "http://localhost:8080/api/booking";

const getBookings = async () => {
  const response = await fetch(url + "/user", {
    method: "GET",
    credentials: "include",
  });

  if (response.ok) {
    const bookings = await response.json();
    return bookings;
  } else {
    console.log("could not fetch bookings");
  }
};

const book = async (data) => {
  const seats = data.seats.map((seat) => seat.id);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      showId: data.showId,
      seats: seats,
    }),
    credentials: "include",
  });

  if (response.ok) {
    const booking = await response.json();
    return booking.id;
  } else {
    throw new Error("Something went wrong");
  }
};

const bookingService = { getBookings, book };

export default bookingService;
