import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Cookie is definitely becoming heathly really soon.
          Full Recovery.
          Cookie is the best cat in the world.
          Cookie will eat whole lot of food.
        </p>
      </div>
    );
  }
}

export default App;
