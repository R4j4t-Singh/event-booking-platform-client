const url = "http://localhost:8080/api";

const getEvents = async () => {
  const response = await fetch(url + "/events", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();
  console.log(data);
  return data;
};

const getEvent = async (id) => {
  const response = await fetch(url + "/events/" + id, {
    method: "GET",
    credentials: "include",
  });

  const event = await response.json();
  console.log(event);

  return event;
};

const getShows = async (id) => {
  const response = await fetch(url + "/events/" + id + "/shows", {
    method: "GET",
    credentials: "include",
  });

  const shows = await response.json();
  console.log(shows);

  return shows;
};

const getSeats = async (id) => {
  const response = await fetch(url + "/seats/show/" + id, {
    method: "GET",
    credentials: "include",
  });

  const seats = await response.json();
  console.log(seats);

  return seats;
};

const addEvent = async (event) => {
  try {
    const response = await fetch(url + "/admin/events", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: event.title,
        category: event.category,
        description: event.description,
        imageUrl:
          "https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg", //TODO
      }),
    });
    console.log(response.status);
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

const addShow = async (show, id) => {
  try {
    const response = await fetch(url + "/admin/shows", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        eventId: id,
        venue: show.venue,
        startTime: show.startTime,
        endTime: show.endTime,
        totalSeats: show.totalSeats,
      }),
    });

    console.log(response.status);
  } catch (error) {
    console.log(error.message);
    throw new Error("Something went wrong");
  }
};

const apiService = {
  getEvents,
  getEvent,
  getShows,
  getSeats,
  addEvent,
  addShow,
};

export default apiService;
