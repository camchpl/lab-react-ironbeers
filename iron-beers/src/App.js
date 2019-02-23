import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Beers from "./component/Beers";
import RandomBeer from "./component/RandomBeer";
import NewBeer from "./component/NewBeer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.beers.map(beer => (
          <ul>
            <li>
              <img src={beer.image_url} width="10%" />
            </li>

            <li>
              <h1>{beer.name}</h1>
            </li>
            <li>
              <h1>{beer.tagline}</h1>
            </li>
            <li>
              <h1>{beer.contributed_by}</h1>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
