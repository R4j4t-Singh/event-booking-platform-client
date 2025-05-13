import React from "react";

function SeacrhBox() {
  return (
    <div className="space-x-3">
      <input
        type="text"
        className="bg-gray-200 px-4 py-1 text-sm border-1 rounded"
        placeholder="Search for events"
      />
    </div>
  );
}

export default SeacrhBox;
