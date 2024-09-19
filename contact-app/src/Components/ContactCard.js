import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.png";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactCard = (props) => {
  const { removeContactHandler } = useContactsCrud();

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      removeContactHandler(id);
    }
  };

  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon right floated"
        style={{
          color: "red",
          marginTop: "7px",
          marginLeft: "10px",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={() => deleteContact(id)}
      ></i>
      <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon right floated"
          style={{
            color: "blue",
            marginTop: "7px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
