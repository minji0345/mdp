import React from 'react';
import './Palette.css';

const Color = ({ color, select, onPlick }) => {
    // 컬러클래스 즉 원을 를 클릭하면  우리가 이름 붙인 함수가 실행되는 것 순서가 반대로!
    return (
        <div className={`color ${select && 'active'}`} style={{ background: color}} onClick={onPlick}> 
        
        </div>
    )
    }

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} select={selected===color} onPlick={() => onSelect(color)} key={color}/>)
    );
    return (
        <div className="palette">
            {colorList}
        </div>
    );
};

export default Palette;