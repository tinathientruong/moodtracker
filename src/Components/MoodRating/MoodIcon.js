import React, { Component } from 'react';

class MoodIcon extends Component {
  render() {
    return (
      <button className={this.props.mood}>
        <i className={`icon-${this.props.fontIcon}`}></i>
      </button>
    );  
  }
}

export default MoodIcon;

