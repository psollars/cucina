import React, { Component } from "react";
import "./../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <label>
          Qty:
          <input onChange={this.handleQty}/>
        </label>
        <label>
          Desc:
          <input onChange={this.handleDesc}/>
        </label>
        <button onClick={this.handleSave}>
          Save this
        </button>
      </div>
    );
  }

  handleQty = (e) => {
    this.setState({
      qty: e.target.value
    });
  }

  handleDesc = (e) => {
    this.setState({
      desc: e.target.value
    });
  }

  handleSave = () => {
    alert("yo");
  };
}

export default App;
