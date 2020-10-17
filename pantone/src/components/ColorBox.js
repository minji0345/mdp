import React from 'react';
import './Colorbox.css';

const Colorbox = ({palette, color, colorname, children}) => {
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

export default Colorbox;