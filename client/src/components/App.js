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
    this.setState({
      qty: e.target.value
    });
  };

  handleUnit = e => {
    this.setState({
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
}

export default App;
