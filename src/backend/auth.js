const url = "http://localhost:8080/api/auth";

const register = async (data) => {
  console.log(data);

  const response = await fetch(url + "/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
      role: "USER",
    }),
  });
  console.log(response);
};

const login = async (data) => {
  const response = await fetch(url + "/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const responseData = await response.json();
  return responseData.token;
};

const getUser = async (data) => {
  const response = await fetch(url + "/user", {
    method: "GET",
    credentials: "include",
  });

  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    return null;
  }
};

const logout = async () => {
  const response = await fetch(url + "/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
};

const authService = { register, login, getUser, logout };

export default authService;
