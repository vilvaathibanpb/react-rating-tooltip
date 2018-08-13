import React, { Component } from 'react';
import './App.css';
import Star from "./Star";
import PropTypes from 'prop-types';


class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.defaultRating,
      hover: -1,
    }
  }

  setSelected = (index) => {
    const { clearRating, ratingValue, onChange } = this.props;
    const { current } = this.state;
    if (clearRating && (current === index + 1)) {
      this.setState({
        current: 0,
        hover: -1
      })
      onChange(0, "-");
    } else {
      this.setState({
        current: index + 1
      })
      onChange(index + 1, ratingValue ? ratingValue[index] : "");
    }

  }

  onHover = (index) => {
    this.setState({
      hover: index + 1
    })
  }

  onMouseLeave = () => {
    this.setState({
      hover: -1
    })
  }

  render() {
    const { max, counterPosition, textPosition, tooltipContent, ratingValue, styleConfig, disabled} = this.props;
    const { current, hover } = this.state;
    const stars = new Array(max);
    const currentValue = hover >= 0 ? hover : current
    for (let i = 0; i < stars.length; i++) {
      stars[i] = <Star
        tooltipStyle={styleConfig && styleConfig.tooltipStyle ? styleConfig.tooltipStyle : {}}
        tpText={tooltipContent && tooltipContent[i] ? tooltipContent[i] : null}
        selected={i < currentValue ? true : false}
        key={i}
        onMouseLeave={disabled ? ()=>{} : this.onMouseLeave}
        onHover={disabled ? ()=>{} : this.onHover}
        index={i}
        selectStar={disabled ? ()=>{} : this.setSelected}
        InActiveComponent={this.props.InActiveComponent}
        ActiveComponent={this.props.ActiveComponent}
      />;
    }
    if (counterPosition) {
      counterPosition === 'left' ?
        stars.unshift((<div key={stars.length + 1} style={styleConfig && styleConfig.counterStyle ? styleConfig.counterStyle : {}}>
          {current}
        </div>)) :
        stars.push((<div key={stars.length + 1} style={styleConfig && styleConfig.counterStyle ? styleConfig.counterStyle : {}}>
          {current}
        </div>))
    }
    if (textPosition) {
      textPosition === 'left' ?
        stars.unshift((<div key={stars.length + 1} style={styleConfig && styleConfig.statusStyle ? styleConfig.statusStyle : {}}>
          {ratingValue && ratingValue[current - 1] ? ratingValue[current - 1] : '-'}
        </div>)) :
        stars.push((<div key={stars.length + 1} style={styleConfig && styleConfig.statusStyle ? styleConfig.statusStyle : {}}>
          {ratingValue && ratingValue[current - 1] ? ratingValue[current - 1] : '-'}
        </div>))
    }

    return (
      <div>
        <div className="wrap-container">
          <div className={"rating-container"} style={styleConfig && styleConfig.starContainer ? styleConfig.starContainer : {}}>
            {stars}
          </div>
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  max: PropTypes.number.isRequired,
  defaultRating: PropTypes.number,
  counterPosition: PropTypes.oneOf(['left', 'right']),
  clearRating: PropTypes.bool,
  disabled: PropTypes.bool,
  textPosition: PropTypes.oneOf(['left', 'right']),
  tooltipContent: PropTypes.array,
  ratingValue: PropTypes.array,
  styleConfig: PropTypes.shape({
    counterStyle: PropTypes.object,
    starContainer: PropTypes.object,
    statusStyle: PropTypes.object,
    tooltipStyle: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
  ActiveComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired,
  InActiveComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired,
};

Rating.defaultProps = {
  clearRating: true,
  disabled: false,
  defaultRating: 0,
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

export default Rating;
