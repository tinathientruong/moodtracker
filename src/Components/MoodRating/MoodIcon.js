import React  from 'react';

const MoodIcon = (props) => {

  const handleIconClick = (e) => {
    e.stopPropagation()
     props.onIconClick();
  }

  return (
      // <button className={props.mood} >
      //   <i className={`icon-${props.fontIcon}`}></i>
      // </button>
      <label for={props.mood} className={props.mood}>
        <input 
        type="radio" 
        id={props.mood} 
        name="mood" 
        value={props.mood}
        onChange={handleIconClick}
        />
        <i className={`icon-${props.fontIcon}`}></i>
      </label>
    );  
  }

export default MoodIcon;

