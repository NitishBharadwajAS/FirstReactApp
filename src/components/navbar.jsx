import React, { Component } from "react";

const Navbar = ({ totalcounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Total Items{" "}
        <span className="badge badge-pill badge-secondary">
          {totalcounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
