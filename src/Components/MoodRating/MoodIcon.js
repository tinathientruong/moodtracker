import React  from 'react';

const MoodIcon = (props) => {
  const handleClick = (e) => {
    e.stopPropagation()
    props.onIconClick()
  }
    return (
      <button className={props.mood} onClick={ handleClick }>
        <i className={`icon-${props.fontIcon}`}></i>
      </button>
    );  
  }

export default MoodIcon;

