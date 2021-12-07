import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Notes from "./components/Notes";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      message: "",
      role: "",
    },
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/notes").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  // console.log(res);
  //console.log(res.data);

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    }); //...this.state.inputData is one is opening where you put setState
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  postHandler = (event) => {
    axios
      .post("http://localhost:3001/notes", this.state.inputData)
      .then((res) => {
        console.log(res);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => console.logd(error));
  };

  render() {
    return (
      <div>
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...this.state.inputData} />
        </div>
        {this.state.showPopup && (
          <Popup {...this.state.inputData} post={this.postHandler} />
        )}
        {this.state.data.map((note) => (
          <Notes {...note} key={note.id} /> //u r opening the item and sending it
        ))}
      </div>
    );
  }
}

export default App;
