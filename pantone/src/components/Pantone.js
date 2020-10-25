import React from 'react';
import './Pantone.css';
import back from './back.jpg';

const Pantone = ({palette, color}) => {


    return (
        <div className="pantoneback" id="pantoneback" style={{ background: color}}>
            <div className="Palette-wrapper" style={{ background: 'black', zIndex:'4'}}
            >
                    {palette}
            </div>
            <div className="frame Pantone-box" id="frame-img" style={{ zIndex:'5'}}>
                <div className="Colorbox-wrapper" >
                    <div className="ColorWindow-wrapper" style={{ background: color, zIndex:'5'}}>
                    </div>
                    <div className="Colorname-wrapper">
                        <div style={{ color }}>PANTONE</div>
                        <div className="Colorname" style={{ color }}>{color}</div>
                        <span>Find your color and click!</span>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Pantone;