import React from 'react';
import './App.css';

const Star = (props) => {
    const [selected, setSelected] = useState(props.selected);
    const [showTooltip, setShowTooltip] = useState(false);

    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        setSelected(selected)
    },
        [selected]
    );

    const onHover = () => {
        props.onHover(props.index);
        setShowTooltip(true);
    }

    const onMouseLeave = () => {
        props.onMouseLeave();
        setShowTooltip(false);
    }

    const selectStar = () => {
        props.selectStar(props.index);
    }

    return (
        <div
            key={props.key}
            onClick={selectStar}
            onMouseOver={onHover}
            onMouseOut={onMouseLeave}
            className="tp-container"
        >
            {selected ? props.ActiveComponent : props.InActiveComponent}
            {showTooltip && props.tpText && <span className="tooltiptext" style={props.tooltipStyle}>{props.tpText}</span>}
        </div>
    );
}

export default Star;
