import React, { Component } from 'react';

class MoodIcon extends Component {
  handleClick = (e) => {
    e.stopPropagation()
    this.props.onIconClick()
  }


  render() {
    return (
      <button className={this.props.mood} onClick={ this.handleClick }>
        <i className={`icon-${this.props.fontIcon}`}></i>
      </button>
    );  
  }
}

export default MoodIcon;

