import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            First name: <span>{props.first}</span>
          </p>
          <p>
            Last name: <span>{props.last}</span>
          </p>
          <p>
            Phonenumber: <span>{props.phone}</span>
          </p>
          <p>
            Message: <span>{props.message}</span>
          </p>
          <p>
            Role: <span>{props.role}</span>
          </p>
          <button onClick={closeHandler}>Yes, I am sure</button>
          <button className="secondary" onClick={closeHandler}>
            Nope, don't want to post it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
