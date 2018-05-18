import React from "react";

export default class Form extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <input name="username" onChange={this.handleChange} />
      <input name="password" type="password" onChange={this.handleChange} />
      <button type="submit">{this.props.buttonAction}</button>
    </form>
  );
}
