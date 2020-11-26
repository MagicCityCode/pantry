import React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      {/* <NavLink exact to="/">
        Home
      </NavLink> */}
      {/* <NavLink exact to="/register">
        Register
      </NavLink> */}
      {/* <NavLink exact to="/login">
        Login
      </NavLink> */}
      <NavLink exact to="/testfoodinput">
        Test Food Input
      </NavLink>
    </nav>
  );
};

export default Nav;
