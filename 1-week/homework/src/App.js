import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      count1 : 0,
      count2 : 0,
    }
  }

  handleIncrement = (counter, amount) => {
    if(counter === 1){
      this.setState({count1: this.state.count1 + amount});
    } else if(counter === 2){
      this.setState({count2: this.state.count2 + amount});
    }
  }

  handleDecrement = (counter, amount) => {
    if(counter === 1){
      this.setState({count1: this.state.count1 - amount});
    } else if(counter === 2){
      this.setState({count2: this.state.count2 - amount});
    }
  }

  handleReset = (counter) => {
    if(counter === 1){
      this.setState({count1 : 0});
    } else if(counter === 2){
      this.setState({count2 : 0});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter counter={1} count1={this.state.count1} count2={this.state.count2} add={this.handleIncrement} sub={this.handleDecrement} reset={this.handleReset} amount={1}/>
          <Counter counter={2} count1={this.state.count1} count2={this.state.count2} add={this.handleIncrement} sub={this.handleDecrement} reset={this.handleReset} amount={2} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
