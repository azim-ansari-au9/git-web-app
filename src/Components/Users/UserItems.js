import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="mg"
        className="rounded mx-auto d-block"
        style={{ width: "60px", borderRadius: "50%" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-light">
          more
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
