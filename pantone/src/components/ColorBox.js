import React from 'react';
// import './Colorbox.css';

const ColorBox = ({colors, color, onChange, selected, onSelect}) => {
    
    // const makeGradient = colors.randomItem(
    //     (color) => (<Color color={color} select={selected===color} onChange={() => onSelect(color)} key={color}/>)
    // );

    return (
        <div className="ColorWindow" style={{ background: color}} onMouseOver={onChange}>
            
        </div>
    )
}
export default ColorBox;