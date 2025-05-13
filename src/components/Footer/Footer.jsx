import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-500 py-4 mt-auto shadow-inner">
      <div className="text-center text-sm text-white">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
