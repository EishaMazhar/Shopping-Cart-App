import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <span className="badge badge-pill badge-secondary">
              Items added into cart : {this.props.totalcounters}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
