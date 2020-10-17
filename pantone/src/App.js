import React, { Component } from 'react';
import './App.css';
import Pantone from './components/Pantone';
import Palette from "./components/Palette";

const colors = ["#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61"];

class App extends Component {

  state = {
    color: "Click!",
  };

  handleColor = (color) => {
    this.setState({
      color,
    });
  };

  
  render() {

    const { color } = this.state;
    const {
      handleColor,
    } = this;

    return (
      <Pantone color={color} 
        palette={
          <Palette colors={colors} selected={color} onSelect={handleColor} />
        }
      >
        
      </Pantone>
    )
  }
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
