import React from 'react';
import './Pantone.css';

const Pantone = ({palette, color, colorname, children}) => {
    return (
        <div className="Pantone-box">
            <div className="Palette-wrapper">
                {palette}
            </div>
            <div className="Colorbox-wrapper">
                <div className="ColorWindow-wrapper">
                    {color}
                </div>
                <div className="Colorname-wrapper">
                    {colorname}
                </div>
            </div>
        </div>
    );
};

export default Pantone;