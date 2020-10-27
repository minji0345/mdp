import React from 'react';
import './Pantone.css';

const Pantone = ({palette, color, ready}) => {


    return (
        <div className="pantoneback" id="pantoneback" style={{ background: color}}>
            <div className="Palette-wrapper" style={{ backgroundColor: 'black'}}
            >
                    {palette}
            </div>
            <div className="frame" id="frame-img" style={{ zIndex:'5'}} onClick={ready}></div>
            <div className="frame Pantone-box" id="frame-img2" style={{ zIndex:'7'}} onClick={ready}>
                <div className="Colorbox-wrapper" >
                    <div className="ColorWindow-wrapper" style={{ background: color, zIndex:'5'}}>
                    </div>
                    <div className="Colorname-wrapper">
                        <div className="title" style={{ color }}>PANTONE</div>
                        <div className="Colorname" style={{ color }}>{color}</div>
                        <span>Find your color and <b>click!</b></span>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Pantone;