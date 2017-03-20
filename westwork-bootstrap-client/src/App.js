import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Westwork-prompt">
          <h2>Welcome to Westwork</h2>
          <h2>What's your name?</h2>
        </div>
        <div className="Westwork-response">
          <form action="dummy">
          </form>
      </div>
    );
  }
}

export default App;
