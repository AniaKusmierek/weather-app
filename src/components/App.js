import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const keyAPI = "209289b4718b2b5f7107d39aaf548fb0";

class App extends Component {
  state = {
    value: "",
    city: "",
    date: "",
    temp: "",
    sunrise: "",
    sunset: "",
    wind: "",
    pressure: "",
    err: false
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleCitySubmit = e => {
    e.preventDefault();
    console.log("formularz przesłany");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
    }&APPID=${keyAPI}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się!");
      })
      .then(response => response.json())
      .then(data =>
        this.setState({
          err: false
        })
      )
      .catch(err => {
        this.setState({
          err: true
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result error={this.state.err} />
      </div>
    );
  }
}

export default App;
