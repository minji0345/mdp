import React from 'react';
import './Palette.css';

const Color = ({ color, select, onChange }) => {
    return (
        <div className={`color ${select && 'active'}`} style={{ background: color}} onClick={onChange}> 
        
        </div>
    )
    }

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} select={selected===color} onChange={() => onSelect(color)} key={color}/>)
    );
    return (
        <>
            <div className="palette">
                {colorList}
            </div>
            <div className="palette1">
                {colorList}
            </div>
            <div className="palette2">
                {colorList}
            </div>
            <div className="palette3">
                {colorList}
            </div>
            <div className="palette4">
                {colorList}
            </div>
            <div className="palette5">
                {colorList}
            </div>
            <div className="palette6">
                {colorList}
            </div>
        </>
    );
};

export default Palette;