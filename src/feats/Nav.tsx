import React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <br />
      {/* <NavLink exact to="/register">
        Register
      </NavLink> */}
      {/* <br/> */}
      {/* <NavLink exact to="/login">
        Login
      </NavLink> */}
      {/* <br/> */}
      <NavLink exact to="/testfoodinput">
        Test Food Input
      </NavLink>
      <br />
    </nav>
  );
};

export default Nav;
