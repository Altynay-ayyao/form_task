import React from "react";

const View = ({ firstname, lastname, phonenumber, role, message }) => {
  return (
    <div className="view">
      <div className="notepad">
        <p>
          Firstname:<span>{firstname}</span>
        </p>
        <p>
          Lastname: <span>{lastname}</span>
        </p>
        <p>
          Phone: <span>{phonenumber}</span>
        </p>
        <p>
          Role: <span>{role}</span>
        </p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default View;
