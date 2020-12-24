import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

/** @todo Get navbar content to wrap / swap to hamburger when screen width narrows */
/** @todo Make search bar functional */
/** @todo Create logout functionality */

const Nav: React.FC = () => (
  <nav className="navbar navbar--dark navbar--fixed-top ">
    <div className="navbar__inner">
      <div className="navbar__items">
        <div
          aria-label="Navigation bar toggle"
          className="navbar__toggle"
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            role="img"
            focusable="false"
          >
            <title>Menu</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </div>
        {/* <Link className='navbar__brand' to='/'>
          <span role='img' className='navbar__logo' aria-label='pantry'>Placeholder for pantryBoss logo TBD</span>
        </Link> */}
        <NavLink className="navbar__item navbar__link" exact to="/">
          Home
        </NavLink>
        <NavLink className="navbar__item navbar__link" exact to="/register">
          Register
        </NavLink>
        <NavLink className="navbar__item navbar__link" exact to="/login">
          Login
        </NavLink>
        <NavLink className="navbar__item navbar__link" exact to="/ingredient-input">
          Ingredient Input
        </NavLink>
        <NavLink className="navbar__item navbar__link" exact to="/search-recipes">
          Recipe Search
        </NavLink>
        <NavLink className="navbar__item navbar__link" exact to="/user-inventory">
          Available Inventory
        </NavLink>
        <NavLink className="navbar__item navbar__link" exact to="/image-input">
          Image Input
        </NavLink>
        {/* Placeholder; make logout functional */}
        <NavLink className="navbar__item navbar__link" exact to="/">
          Log Out
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
    <div role="presentation" className="navbar-sidebar__backdrop" />
    {/* <div onClick={this.handleHamburgerClick} className="navbar-sidebar">
      <div className='navbar-sidebar__brand'>
        <Link className='navbar__brand' to='/'>
          <span role='img' className='navbar__logo' aria-label='pantry'>Placeholder for pantryBoss logo TBD</span>
        </Link>
      </div>
      <div className='navbar-sidebar__items'>
        <div className='menu'>
          <ul className='menu__list'>
            {this.props.currentUser.isAuthenticated ? (
              <>
                <NavLink exact to='/' className='menu__list-item menu__link'>
                  Global
                                        </NavLink>
                <NavLink exact to={`/${this.props.currentUser.user.id}`} className='menu__list-item menu__link'>
                  Your Reads
                                        </NavLink>
                <NavLink exact to='/subscriptions' className='menu__list-item menu__link'>
                  Friends
                                        </NavLink>
                <div onClick={this.logout} className='menu__list-item menu__link'>
                  <small>Sign out</small>
                </div>
              </>
            ) : (
                <>
                  <NavLink exact to='/signup' className='menu__list-item menu__link'>
                    Sign up
                  </NavLink>
                  <NavLink exact to='/signin' className='menu__list-item menu__link'>
                    Log in
                  </NavLink>
                </>
              )}
          </ul>
        </div>
      </div>
    </div> */}
  </nav>
);

export default Nav;
