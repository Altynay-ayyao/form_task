import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ firstname, lastname, phonenumber, role, message, post }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            First name: <span>{firstname}</span>
          </p>
          <p>
            Last name: <span>{lastname}</span>
          </p>
          <p>
            Phonenumber: <span>{phonenumber}</span>
          </p>
          <p>
            Message: <span>{message}</span>
          </p>
          <p>
            Role: <span>{role}</span>
          </p>
          <button onClick={post}>Yes, I am sure</button>
          <button className="secondary" onClick={closeHandler}>
            Nope, don't want to post it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
