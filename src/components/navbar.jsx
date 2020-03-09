import React, { Component } from "react";

// stateless functional compoent

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//     render() {
//       return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <a class="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       );
//     }
//   }

export default NavBar;
