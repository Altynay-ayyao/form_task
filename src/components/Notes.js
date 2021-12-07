import React from "react";

const Notes = ({ firstname, lastname, phonenumber, role, message }) => {
  return (
    <div className="notes">
      {firstname}
      {lastname}-<em>{role}</em> | {phonenumber} |<strong>{message}</strong>
    </div>
  );
};

export default Notes;
