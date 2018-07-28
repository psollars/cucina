import React, { Component } from 'react';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <label>Qty:
          <input />
        </label>
        <label>Desc:
          <input />
        </label>
        <button> 
          Save this
        </button>
      </div>
    );
  }
}

export default App;
