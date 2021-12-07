import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showPopup: false,
  };

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
        <Form change={this.inputHandler} submit={this.popupHandler} />
        <View {...props} />
        {this.state.showPopup && <Popup {...props} />}
      </div>
    );
  }
}

export default App;
