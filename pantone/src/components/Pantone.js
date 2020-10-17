import React from 'react';
import ColorBox from './ColorBox';
import './Pantone.css';

// 박스안을 마우스가 돌아다닐 때 미세하게 변하는 컬러들 

const Pantone = ({palette, color}) => {

    return (
        <div className="background" style={{ background: color }}>
            <div className="Palette-wrapper" style={{ background: color }}>
                    {palette}
            </div>
            <div className="Pantone-box">
                <div className="Colorbox-wrapper" >
                    <ColorBox color={color}/>
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