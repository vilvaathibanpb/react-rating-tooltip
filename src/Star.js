import React, { useState, useEffect } from 'react';
import './App.css';

const Star = (props) => {
    const [selected, setSelected] = useState(props.selected);
    const [showTooltip, setShowToolTip] = useState(false);

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    const onHover = () => {
        props.onHover(props.index);
        setShowToolTip(true);
    }

    const onMouseLeave = () => {
        props.onMouseLeave();
        setShowToolTip(false);

    }

    const selectStar = () => {
        props.selectStar(props.index)
    }

    return (
        <div onClick={selectStar} onMouseOver={onHover} onMouseOut={onMouseLeave} className="tp-container">
            {selected ? props.ActiveComponent : props.InActiveComponent}
            {showTooltip && props.tpText && <span className="tooltiptext" style={props.tooltipStyle}>{props.tpText}</span>}
        </div>
    );
}

export default Star;
