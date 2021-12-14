import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <div className="notepad">
        <p>Firstname: {props.first}</p>
        <p>Lastname: {props.last}</p>
        <p>Phone: {props.phone}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
      </div>
    </div>
  );
};

export default View;
