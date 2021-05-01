import React from 'react';
import './App.css';
class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected,
            showTooltip: false
        }
    }

    componentDidUpdate(PrevProps) {
        const { selected } = this.props;
        if (selected !== PrevProps.selected) {
            this.setState({
                selected: selected
            })
        }
    }
    onHover = () => {
        this.props.onHover(this.props.index);
        this.setState({
            showTooltip: true
        })
    }
    onMouseLeave = () => {
        this.props.onMouseLeave();
        this.setState({
            showTooltip: false
        })
    }
    selectStar = () => {
        this.props.selectStar(this.props.index)
    }
    render() {
        return (
            <div key={this.props.key} onClick={this.selectStar} onMouseOver={this.onHover} onMouseOut={this.onMouseLeave} className="tp-container">
                {this.state.selected ? this.props.ActiveComponent : this.props.InActiveComponent}
                {this.state.showTooltip && this.props.tpText && <span className="tooltiptext" style={this.props.tooltipStyle}>{this.props.tpText}</span>}
            </div>
        );
    }
}

export default Star;
