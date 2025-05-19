import React from "react";

function SearchBox() {
  return (
    <div className="space-x-3">
      <input
        type="text"
        className="bg-gray-200 px-2 py-2 border-1 rounded text-center"
        placeholder="Search for events"
      />
    </div>
  );
}

export default SearchBox;
