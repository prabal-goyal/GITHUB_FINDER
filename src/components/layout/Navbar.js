import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/">
          {<i className={icon}></i>} {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">
            <strong>Home</strong>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <strong>About</strong>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'CodeHarbor',
  icon: 'fa-solid fa-code',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
