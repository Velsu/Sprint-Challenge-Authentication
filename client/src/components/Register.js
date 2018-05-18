import React from "react";
import Form from "./Form";
import axios from "axios";

export default class Register extends React.Component {
  handleSubmit = user => {
    axios
      .post("http://localhost:5000/api/users/", user)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/signin");
      })
      .catch(err => console.log(err));
  };

  render() {
    return <Form buttonAction="Register" handleSubmit={this.handleSubmit} />;
  }
}
