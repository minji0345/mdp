import React from 'react';
import Colorbox from './ColorBox';
import './Pantone.css';

const Pantone = ({palette, color, colorname, children}) => {
    return (
        <div className="background">
            {color}
            <div className="Pantone-box">
                <div className="Palette-wrapper">
                    {palette}
                </div>
                <div className="Colorbox-wrapper">
                    <div className="ColorWindow-wrapper">
                        {color}
                    </div>
                    <div className="Colorname-wrapper" Colorbox>
                        PANTONE
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantone;