import React from "react";
import Form from "./Form";
import axios from "axios";

export default class Login extends React.Component {
  handleSubmit = user => {
    axios
      .post("http://localhost:5000/api/login/", user)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };

  render() {
    return <Form buttonAction="Login" handleSubmit={this.handleSubmit} />;
  }
}
