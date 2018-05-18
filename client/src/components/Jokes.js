import React from "react";
import axios from "axios";
import { link } from "fs";

export default class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount = event => {
    const token = localStorage.getItem("token");

    const authToken = `${token}`;

    const requestOptions = {
      headers: {
        Authorization: authToken
      }
    };

    axios
      .get("http://localhost:5000/api/jokes", requestOptions)
      .then(response => {
        console.log(response);
        this.setState({ jokes: response.data });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/signin");
      });
  };

  render() {
    return (
      <ul>
        {this.state.jokes.map(joke => {
          return (
            <div key={joke._id} className="joke">
              <li className="type">{joke.type}</li>
              <li className="setup">{joke.setup}</li>
              <li className="punch">{joke.punchline}</li>
            </div>
          );
        })};
      </ul>
    );
  }
}
