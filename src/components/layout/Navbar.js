import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const Navbar = ({ icon, title }) => {
  const githubContext = useContext(GithubContext);

  const { clearUsers } = githubContext;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/" onClick={clearUsers}>
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
