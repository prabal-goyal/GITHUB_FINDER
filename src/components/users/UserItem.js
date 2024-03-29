import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btm-sm my-1">
          Visit
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
