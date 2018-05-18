import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, withRouter, NavLink } from "react-router-dom";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import Register from "./components/Register";
import Home from "./components/Home";

class App extends Component {
  signout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <NavLink className="home" to="/">
              Home
            </NavLink>
          </h1>

          {localStorage.getItem("token") && (
            <button className="logout" onClick={this.signout}>
              Sign out
            </button>
          )}
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
