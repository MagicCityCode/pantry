import React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav className="navbar navbar--dark">
      <div className="navbar__inner">
        <div className="navbar__items">
          <NavLink className="navbar__item navbar__link" exact to="/">
            Home
          </NavLink>
          {/* <NavLink className="navbar__item navbar__link" exact to="/register">
          Register
          </NavLink> */}
          {/* <NavLink className="navbar__item navbar__link" exact to="/login">
          Login
          </NavLink> */}
          <NavLink
            className="navbar__item navbar__link"
            exact
            to="/testfoodinput"
          >
            Test Food Input
          </NavLink>
          <NavLink className="navbar__item navbar__link" exact to="/imageInput">
            Image Input
          </NavLink>
        </div>
        <div className="navbar__items navbar__items--right">
          <form>
            <div className="navbar__search">
              <input className="navbar__search-input" placeholder="Search" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
