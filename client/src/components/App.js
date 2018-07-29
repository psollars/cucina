import React, { Component } from "react";
import "./../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "tsp",
      userUnit: "tsp"
    };
  }

  render() {
    return (
      <div className="App">
        <label>
          Qty:
          <input onChange={this.handleQty} />
        </label>
        <label>
          Unit:
          <select onChange={this.handleUnit}>
            <option value="tsp">tsp</option>
            <option value="tbsp">tbsp</option>
            <option value="cup">cup</option>
            <option value="ml">ml</option>
          </select>
        </label>
        <label>
          Desc:
          <input onChange={this.handleDesc} />
        </label>
        <button onClick={this.handleSave}>Save this</button>
        <div>
          <label>
            View Ingredients as:
            <select onChange={this.handleUserUnit}>
              <option value="tsp">tsp</option>
              <option value="tbsp">tbsp</option>
              <option value="cup">cup</option>
              <option value="ml">ml</option>
            </select>
          </label>
          <ul>
            <li>
              {this.handleUserConversion()} {this.state.userUnit}{" "}
              {this.state.desc}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  handleQty = e => {
    const qty = e.target.value;
    const measurement = this.handleMlConversion(
      e.target.value,
      this.state.unit
    );

    this.setState({
      qty,
      measurement
    });
  };

  handleUnit = e => {
    const measurement = this.handleMlConversion(this.state.qty, e.target.value);

    this.setState({
      measurement,
      unit: e.target.value
    });
  };

  handleDesc = e => {
    this.setState({
      desc: e.target.value
    });
  };

  handleSave = () => {
    alert("yo");
  };

  handleUserUnit = e => {
    this.setState({
      userUnit: e.target.value
    });
  };

  handleUserConversion = () => {
    switch (this.state.userUnit) {
      case "tsp":
        return Math.floor(this.state.measurement * 0.20288);
      case "tbsp":
        return Math.floor(this.state.measurement * 0.067628);
      case "cup":
        return (this.state.measurement * 0.0042268).toFixed(2);
      case "ml":
        return this.state.measurement;
      default:
        console.log("oops");
    }
  };

  handleMlConversion = (qty, unit) => {
    switch (unit) {
      case "tsp":
        return qty / 0.20288;
      case "tbsp":
        return qty / 0.067628;
      case "cup":
        return qty / 0.0042268;
      case "ml":
        return qty;
      default:
        console.log("oops");
    }
  };
}

export default App;
