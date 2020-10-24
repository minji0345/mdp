import React, { useState, useEffect } from 'react';
import './App.css';
import useMousePosition from './useMousePosition';
import Pantone from './components/Pantone';
import ColorBox from "./components/Pantone";
import Palette from "./components/Palette";
import frame from './frame.png';

const colors = [ "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61","#F7CAC9","#955251","#B163A3","#009473","#DD4124","#D94F70","#45B5AA","#F0C05A","#5A5B9F","#9B1B30","#DECDBE","#53B0AE"];
const pantonecolors = [ "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61","#F7CAC9","#955251","#B163A3","#009473","#DD4124"];

const App = () => {

  const [color, setColor] = useState("#PANTONE COLOR");

  const handleColor = (color) => {
    setColor(color);
  };

  const { x,y } = useMousePosition();

  useEffect(()=>{
    const frameImg = document.getElementById('frame-img');
    frameImg.style.position = 'absolute';
    frameImg.style.top = (y-200)+'px';
    frameImg.style.left = (x-250)+'px';

  },[x,y])

  function getPosition( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { xPos: _x, yPos: _y,  };
  }

  useEffect(()=>{
    const colors = document.getElementsByClassName('color');
    let filteredColors = [];

    for (let color of colors) {
      const { xPos,yPos }= getPosition(color);
      if (xPos<x+200 && xPos>=x-150 && yPos<y+200 && yPos>=y-100) {
        filteredColors.push(color)
      }
    }
    
    for (let color of colors) {
      if (filteredColors.includes(color)) {
        color.style.zIndex = 6;
        color.style.opacity = 1;
      }
      else {
        color.style.zIndex = 1;
        color.style.opacity = 0;
      }
    }

  },[x,y])



  return (
    <body>
      <img className="frame" id="frame-img" src={frame} style={{zIndex:'5'}} />
      <Pantone 
        color={color} 
        palette={
          <Palette colors={colors} selected={color} onSelect={handleColor} />
        }
        colorbox={
          <ColorBox color={color}/>
        }>
      </Pantone>
    </body>
  )
  
}

export default App;
