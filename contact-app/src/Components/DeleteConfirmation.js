// DeleteConfirmation.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteConfirmation = ({ confirmDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    confirmDelete(id); // Call the delete handler
    navigate("/"); // Correct usage of navigate
  };

  const handleCancel = () => {
    navigate("/"); // Correct usage of navigate
  };

  return (
    <div className="ui container center aligned" style={{ paddingTop: "50px" }}>
      <h2>Are you sure you want to delete this contact?</h2>
      <button className="ui button red" onClick={handleDelete}>
        Yes
      </button>
      <button className="ui button" onClick={handleCancel}>
        No
      </button>
    </div>
  );
};

export default DeleteConfirmation;
