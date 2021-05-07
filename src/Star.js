import { useState, useEffect } from "react";
import "./App.css";
function Star(props) {
  const [isActive, setIsActive] = useState(props.selected);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setIsActive(props.selected);
  }, [props.selected]);
  const onHover = () => {
    props.onHover(props.index);
    setShowTooltip(true);
  };
  const onMouseLeave = () => {
    props.onMouseLeave();
    setShowTooltip(false);
  };
  const selectStar = () => {
    props.selectStar(props.index);
  };

  return (
    <div
      onClick={selectStar}
      onMouseOver={onHover}
      onMouseLeave={onMouseLeave}
      className="tp-container"
    >
      {isActive ? props.ActiveComponent : props.InActiveComponent}
      {showTooltip && props.tpText && (
        <span className="tooltiptext" style={props.tooltipStyle}>
          {props.tpText}
        </span>
      )}
    </div>
  );
}

export default Star;
