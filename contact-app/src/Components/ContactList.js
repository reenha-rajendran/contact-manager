// ContactList.js
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../Components/ContactCard.js";
import { useContactsCrud } from "../context/ContactsCrudContext.js";

const ContactList = () => {
  const {
    contacts,
    retriveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retriveContacts();
  }, [retriveContacts]);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => <ContactCard contact={contact} key={contact.id} />);

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
