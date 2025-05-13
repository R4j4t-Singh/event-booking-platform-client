import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  EventPage,
  Home,
  Login,
  Signup,
  BookingPage,
  Profile,
  AdminPage,
  CreateEventPage,
  CreateShowPage,
  AuthLayout,
} from "./pages";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<App />>
      <Route path="" element=<Home /> />
      <Route path="events" element=<Home /> />
      <Route path="events/:id" element=<EventPage /> />
      <Route
        path="login"
        element=<AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      />
      <Route
        path="signup"
        element=<AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      />
      <Route
        path="booking"
        element=<AuthLayout authentication={true}>
          <BookingPage />
        </AuthLayout>
      />
      <Route
        path="profile"
        element=<AuthLayout authentication={true}>
          <Profile />
        </AuthLayout>
      />
      <Route
        path="admin"
        element=<AuthLayout authentication={true}>
          <AdminPage />
        </AuthLayout>
      />
      <Route
        path="admin/create/event"
        element=<AuthLayout authentication={true}>
          <CreateEventPage />
        </AuthLayout>
      />
      V
      <Route
        path="admin/create/:id/show"
        element=<AuthLayout authentication={true}>
          <CreateShowPage />
        </AuthLayout>
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
