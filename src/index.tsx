import React, { useState } from 'react';

import Star from "./Star";
import './App.css';

const Rating = (props: Props) => {
  const [current, setCurrent] = useState(props.defaultRating);
  const [hover, setHover] = useState(-1);

  const setSelected = (index: number) => {
    const { clearRating, ratingValue, onChange } = props;

    if (clearRating && (current === index + 1)) {
      setCurrent(0);
      setHover(-1);
      onChange(0, "-");
    } else {
      setCurrent(index + 1);
      onChange(index + 1, ratingValue ? ratingValue[index] : "");
    }
  }

  const onHover = (index: number) => {
    setHover(index + 1)
  }

  const onMouseLeave = () => {
    setHover(-1);
  }

  const { max, counterPosition, textPosition, tooltipContent, ratingValue, styleConfig, disabled } = props;
  const stars = new Array(max);
  const currentValue = hover >= 0 ? hover : current;

  for (let i = 0; i < stars.length; i++) {
    stars[i] = <Star
      tooltipStyle={styleConfig && styleConfig.tooltipStyle ? styleConfig.tooltipStyle : {}}
      tpText={tooltipContent && tooltipContent[i] ? tooltipContent[i] : null}
      selected={i < currentValue ? true : false}
      key={i}
      onMouseLeave={disabled ? () => { } : onMouseLeave}
      onHover={disabled ? () => { } : onHover}
      index={i}
      selectStar={disabled ? () => { } : setSelected}
      InActiveComponent={props.InActiveComponent}
      ActiveComponent={props.ActiveComponent}
    />;
  }

  const counterElement = (
    <div key={stars.length + 1} style={styleConfig && styleConfig.counterStyle ? styleConfig.counterStyle : {}}>
      {current}
    </div>
  );
  if (counterPosition) {
    counterPosition === 'left'
      ? stars.unshift(counterElement)
      : stars.push(counterElement)
  }

  const textElement = (
    <div key={stars.length + 1} style={styleConfig && styleConfig.statusStyle ? styleConfig.statusStyle : {}}>
      {ratingValue && ratingValue[current - 1] ? ratingValue[current - 1] : '-'}
    </div>
  );
  if (textPosition) {
    textPosition === 'left'
      ? stars.unshift(textElement)
      : stars.push(textElement)
  }

  return (
    <div className="wrap-container">
      <div className="rating-container" style={styleConfig && styleConfig.starContainer ? styleConfig.starContainer : {}}>
        {stars}
      </div>
    </div>
  );
}


Rating.defaultProps = {
  clearRating: true,
  disabled: false,
  defaultRating: 0,
  counterPosition: 'left',
  textPosition: 'right',
  styleConfig: {
    counterStyle: {
      height: '28px',
      backgroundColor: '#F58220',
      paddingLeft: '12px',
      paddingRight: '12px',
      color: '#FFF',
      lineHeight: '28px',

    },
    starContainer: {
      fontSize: '24px',
      backgroundColor: '#F2F2F2',
      height: '28px',
    },
    statusStyle: {
      height: '28px',
      backgroundColor: '#F58220',
      paddingLeft: '12px',
      paddingRight: '12px',
      color: '#FFF',
      lineHeight: '28px',
      minWidth: '100px',
      fontSize: '18px',
      textAlign: 'center',
    },
    tooltipStyle: {
      fontSize: '14px',
      padding: '5px',
    }
  }
}

type Position = 'left' | 'right';

type DefaultProps = {
  clearRating: boolean,
  disabled: boolean,
  defaultRating: number,
  counterPosition: Position,
  textPosition: Position,
  styleConfig: {
    counterStyle: React.CSSProperties,
    starContainer: React.CSSProperties,
    statusStyle: React.CSSProperties,
    tooltipStyle: React.CSSProperties
  }
}

type RequiredProps = {
  max: number,
  onChange: (index: number, ratingValue: React.ReactNode) => void,
  tooltipContent: React.ReactNode[],
  ratingValue: React.ReactNode[],
  ActiveComponent: React.ReactNode,
  InActiveComponent: React.ReactNode
}

type Props = RequiredProps & DefaultProps;

export default Rating;
