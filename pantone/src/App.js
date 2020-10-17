import React, { Component } from 'react';
import './App.css';
import Pantone from './components/Pantone';
import ColorBox from "./components/Pantone";
import Palette from "./components/Palette";

const colors = [ "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61","#F7CAC9","#955251","#B163A3","#009473","#DD4124","#D94F70","#45B5AA","#F0C05A","#5A5B9F","#9B1B30","#DECDBE","#53B0AE"];
// const pantonecolors = [ "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61","#F7CAC9","#955251","#B163A3","#009473","#DD4124"];

class App extends Component {

  state = {
    color: "#PANTONE COLOR",
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
      <Pantone 
        color={color} 
        palette={
          <Palette colors={colors} selected={color} onSelect={handleColor} />
        }

        colorbox={
          <ColorBox color={color}/>
        }>
        
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
