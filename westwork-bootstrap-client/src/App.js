import React, { Component } from 'react';
import './App.css';


function QuestionPrompt(props) {
  return (
    <div>
      <h1>Hello, I'm Westwork</h1>
      <h2>What's your name?</h2>
    </div>
  );
}

function WestworkForm(props) {
  return (
    <div>
      <form action="dummy">
        <input type="text" placeholder="Name" />
      </form>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Westwork-prompt">
          <QuestionPrompt />
        </div>
        <div className="Westwork-response">
          <WestworkForm />
        </div>
      </div>
    );
  }
}

export default App;
