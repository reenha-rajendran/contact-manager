// ContactDetail.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../Images/user.png";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact; // Correctly accessing state

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <button className="ui button blue">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
