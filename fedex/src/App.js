import React, {Component} from 'react';
import './App.css';
import fedex from './img/fedex.png';
import box from './img/box.png';


function App() {

  

  const style = {
    backgroungColor : 'white',
  };

  const handleMouseOver = (e) =>{

}

  return (
    <div className="App" style={style}>
      <img class="fedex" src={fedex}></img>
      <img class="box" src={box}></img>
    </div>
  );
}

export default App;
