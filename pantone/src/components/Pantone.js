import React from 'react';
import Colorbox from './ColorBox';
import './Pantone.css';

const ColorBox = ({color, onMouseOverr}) => {

    return (
        <div className="ColorWindow" style={{ background: color}} onMouseOver={onMouseOverr}>
        
        </div>
    )
    }
// 박스안을 마우스가 돌아다닐 때 미세하게 변하는 컬르들 

const Pantone = ({palette, color}) => {

    return (
        <div className="background" style={{ background: color }}>
            <div className="Pantone-box">
                <div className="Palette-wrapper" style={{ background: color }}>
                    {palette}
                </div>
                <div className="Colorbox-wrapper" >
                    <div className="ColorWindow-wrapper">
                        <ColorBox color={color}/>
                    </div>
                    <div className="Colorname-wrapper" Colorbox>
                        <div>PANTONE</div>
                        <div className="Colorname" style={{ color }}>{color}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pantone;