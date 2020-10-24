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

  const getPosition = (el) => {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
      el = el.offsetParent;
    }
    return {
      xPos: xPos,
      yPos: yPos
    };
  }

  useEffect(()=>{
    const colors = document.getElementsByClassName('color');
    let filteredColors = [];
    for (var color of colors) {
      const {xPos,yPos}= getPosition(color);
      // if (xPos<=50 && yPos<=60) {
      //   filteredColors.push(color)
      // }
      console.log('element position', xPos, yPos)
      
    }
    console.log(filteredColors)
    console.log('mouse pos', x,y)
    filteredColors.forEach((color)=>{
      color.style.opacity = 1;
    })
    
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
