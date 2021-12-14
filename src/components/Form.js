import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={props.change}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={props.change}
        />
      </div>
      <div>
        <label htmlFor="phone">Phonenumber</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          required
          onChange={props.change}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" onChange={props.change}>
          <option value="teacher" selected>
            Teacher
          </option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          onChange={props.change}
        ></textarea>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
