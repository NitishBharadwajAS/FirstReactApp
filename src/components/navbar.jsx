import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Total Items{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalcounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
