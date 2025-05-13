import React from "react";
import { EventsList } from "../components";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-end px-8 py-4">
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => navigate("/admin/create/event")}
        >
          Create Event
        </button>
      </div>
      <EventsList />
    </div>
  );
}

export default AdminPage;
