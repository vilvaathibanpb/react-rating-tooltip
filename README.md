# React-Rating-Tooltip

React-rating-tooltip is a simple to use yet completely customizable component for getting use Rating/Reviews.

- Fully CSS customizable - Styles of Rating Counter, star-container, selected status and tooltip style
- Custom position of rating counter and selected status around the Rating
- Active(Selected) & Inactive(Unselected) components of the rating
- Customize Tooltip, clear rating etc.

### Installation

This requires [React.js and Prop-Types] to run.

```sh
npm i react-rating-tooltip
```

### Demo

[Sandbox link to Play with](https://codesandbox.io/p/sandbox/react-rating-tooltip-forked-vp679q)

### How to Use

Install and import react-rating-tooltip and pass the props as per the below table

```sh
import React from 'react';
import Rating from 'react-rating-tooltip';
import 'font-awesome/css/font-awesome.min.css';

class SampleRating extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          max: 4,
          defaultRating: 2,
          counterPosition: 'left',
          clearRating: true,
          textPosition: 'right',
          tooltipContent: ["Very Bad", "Bad", "Fair", "Good", "Very Good"],
          ratingValue: ["Very Bad", "Bad", "Fair", "Good", "Very Good"],
          starStyle: {
              height: '28px',
              backgroundColor: '#F2F2F2',
              paddingLeft: '2px',
              paddingRight: '2px',
              color: '#F58220',
              lineHeight: '28px',
              marginLeft: '5px',
              marginRight: '5px',
          },
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
      }

      handleChange = (RatingIndex, RatingValue) => {
        console.log(RatingIndex, RatingValue);
      }

    render() {
        return(
            <Rating
                max = {this.state.max}
                defaultRating = {this.state.defaultRating}
                counterPosition = {this.state.counterPosition}
                clearRating = {this.state.clearRating}
                textPosition = {this.state.textPosition}
                tooltipContent = {this.state.tooltipContent}
                ratingValue={this.state.ratingValue}
                styleConfig = {this.state.styleConfig}
                onChange={this.handleChange}
                ActiveComponent={<i className="fa fa-star" style={this.state.starStyle} />}
                InActiveComponent={<i className="fa fa-star-o" style={this.state.starStyle} />}
            />
        );
    }
}

export default SampleRating;
```

### Prop-Types

Details of the Props to be passed:

| Prop-name         | Type               | Description                                                                                                                                                               |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| max               | Number             | `Required`. This determines the maximum number of Stars or Rating in the Component.                                                                                       |
| defaultRating     | Number             | `Default value - 0`. This determines the current number of selected Stars or Rating in the Component.                                                                     |
| counterPosition   | String             | `Possible Values - ['left', 'right']`. This determines the position of the Rating Count in the Component. If not passed, Count will not be displayed.                     |
| textPosition      | String             | `Possible Values - ['left', 'right']`. This determines the position of the Rating Value (Status) in the Component. If not passed, Select value will not be displayed.     |
| clearRating       | Boolean            | `Default Value - true`. This determines whether the rating can be cleared/reset. If passed true, clicking again on the same rating count will clear the rating.           |
| disabled          | Boolean            | `Default Value - false`. This determines whether the rating can be enabled/disabled. If passed true, the rating component will be disabled and act as Read only component |
| tooltipContent    | Array              | The Array of values as tooltip. Tooltips Values are matched to Rating count based on index. If not passed, tooltip will not be added                                      |
| ratingValue       | Array              | The Array of values for Rating count. Rating Values are matched to Rating count based on index. If not passed, Values will not be set                                     |
| onChange          | Function           | `Required`. A callback function which gets two arguements on every change of Rating - `Rating count, Rating Value (if passed)`                                            |
| ActiveComponent   | React/HTML Element | `Required`. The component or element to be considered as Selected rating                                                                                                  |
| InActiveComponent | React/HTML Element | `Required`. The component or element to be considered as Left-out rating                                                                                                  |
| styleConfig       | Object             | `See the below table for more details`. Its a Nested object with specific styles for specific parts of the Component                                                      |

### styleConfig Details

Details of the styleConfig:

| Prop-name     | Type   | Description                                                                                         |
| ------------- | ------ | --------------------------------------------------------------------------------------------------- |
| counterStyle  | Object | CSS styles to be applied to the Part of the component where the Rating count is displayed           |
| starContainer | Object | CSS styles to be applied to the Part of the component container where the stars/Rating is displayed |
| statusStyle   | Object | CSS styles to be applied to the Part of the component where the Rating value/status is displayed    |
| tooltipStyle  | Object | CSS styles to be applied to the tooltips of the component                                           |

**Please check the example for styleConfig**

### Props:

#### Prop-Types:

```sh
{
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
}
```

#### Default-Props

```sh
{
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
```

## Contribution

You are welcome to raise issues and PRs in the repository.
