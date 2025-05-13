import React from "react";

function Input({ type, placeholder, className, ...props }) {
  return (
    <div>
      <input
        type={type}
        className={`bg-gray-200 w-full p-2 rounded ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default Input;
