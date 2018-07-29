import React, { Component } from "react";
import "./../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "tsp"
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
      </div>
    );
  }

  handleQty = e => {
    const qty = e.target.value;
    const measurement = this.handleConversion(e.target.value, this.state.unit);

    this.setState({
      qty,
      measurement
    });
  };

  handleUnit = e => {
    const measurement = this.handleConversion(this.state.qty, e.target.value);

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

  handleConversion = (qty, unit) => {
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
