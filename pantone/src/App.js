import React, { useState, useEffect } from 'react';
import './App.css';
import useMousePosition from './useMousePosition';
import Pantone from './components/Pantone';
import Palette from "./components/Palette";
import frame from './frame.png';
import life from './components/life.jpg';

const colors = [ "#92A8D1", "#88B04B", "#5F4B8B", "#FF6F61","#F7CAC9","#955251","#B163A3","#009473","#DD4124","#D94F70","#45B5AA","#F0C05A","#5A5B9F","#9B1B30","#DECDBE","#53B0AE"];

const App = () => {

  // const radomColor = Math.floor(Math.random()*colors.length);
  // const target = colors.indexOf(randomColor);
  //이렇게 랜덤하게 컬러 지정하는거 안되는지?
  

  const [color, setColor] = useState("#PANTONE COLOR");

  const handleColor = (color) => {
    setColor(color);
  };

  const { x,y } = useMousePosition();

  useEffect(()=>{
    const frameImg = document.getElementById('frame-img');
    frameImg.style.position = 'absolute';
    frameImg.style.top = (y-180)+'px';
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
      if (xPos<x+150 && xPos>=x-150 && yPos<y+150 && yPos>=y-150) {
        filteredColors.push(color)
      }
    }
    
    for (let color of colors) {
      if (filteredColors.includes(color)) {
        color.style.zIndex = 6;
        color.style.opacity = 0;
        color.style.background = `${color}`;
      }
      else {
        color.style.zIndex = 4;
        color.style.opacity = 1;
      }
    }

  },[x,y])

  // useEffect(()=>{
  //   const life = document.getElementsByClassName('life');

  //     const { xPos,yPos }= getPosition(life);
  //     if (xPos<x+80 && xPos>=x-80 && yPos<y+80 && yPos>=y-80) {
  //       life.style.zIndex = 7;
  //       life.style.opacity = 1;
  //   } else {
  //       color.style.zIndex = 1;
  //       color.style.opacity = 0;
  //     }
  // },[x,y])

  const onRevert = () => {
    const paletteWrapper = document.getElementsByClassName('Pantone-box');
    paletteWrapper.style.display = 'flex';
  }


// 마우스기 지나다니는 곳, 즉 프레임 안은 색이 컬러가 되도록 
  return (
    <body>
      <img className="frame" id="frame-img" src={frame} style={{zIndex:'5'}}/>
      <img className="life" id="life-img" src={life} style={{zIndex:'3'}}/>
      
      <Pantone 
        color={color} 
        palette={
          <Palette onSelect={onRevert} colors={colors} selected={color} onSelect={handleColor}  className="frame" id="frame-img"/>
        }>
      </Pantone>
    </body>
  )
  
}

export default App;
