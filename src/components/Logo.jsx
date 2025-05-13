import React from "react";
import { Link } from "react-router-dom";

function Logo({ width = "60px" }) {
  return (
    <Link to="/">
      <img src="images/logo.png" alt="logo" width={width} />
    </Link>
  );
}

export default Logo;
