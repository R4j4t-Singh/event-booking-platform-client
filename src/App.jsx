import React, { useEffect } from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { setUser, resetUser } from "./store/authSlice";
import { useDispatch } from "react-redux";
import authService from "./backend/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const user = await authService.getUser();
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(resetUser());
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
