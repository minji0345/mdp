import React from 'react';
import './Pantone.css';

const Pantone = ({palette, color}) => {

    return (
        <div className="background" style={{ background: color }}>
            <div className="Palette-wrapper" style={{ background: color }}>
                    {palette}
            </div>
            <div className="Pantone-box">
                <div className="Colorbox-wrapper" >
                    <div className="ColorWindow-wrapper" style={{ background: color}}>
                    </div>
                    <div className="Colorname-wrapper">
                        <div>PANTONE</div>
                        <div className="Colorname" style={{ color }}>{color}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantone;