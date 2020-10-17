import React from 'react';
// import './Colorbox.css';

const ColorBox = ({color}) => {
    
    // const makeGradient = colors.randomItem(
    //     (color) => (<Color color={color} select={selected===color} onChange={() => onSelect(color)} key={color}/>)
    // );

    return (
        <div className="ColorWindow" style={{ background: color}}>
            
        </div>
    )
}
export default ColorBox;