import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Notes from "./components/Notes";

import axios from "axios";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/notes").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  render() {
    const props = {
      first: this.state.firstname,
      last: this.state.lastname,
      phone: this.state.phonenumber,
      role: this.state.role,
      message: this.state.message,
    };

    return (
      <div>
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...props} />
        </div>
        {this.state.showPopup && <Popup {...props} />}
        {this.state.data.map((note) => (
          <Notes {...note} />
        ))}
      </div>
    );
  }
}

export default App;
