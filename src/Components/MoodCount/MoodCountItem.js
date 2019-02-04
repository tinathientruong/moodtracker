import React from 'react';

const MoodCountItem = (props) => {
    return (
        <div className="moodCount__item">
            <div className="moodCount__item__heading">
                <h2>{props.mood}</h2>
                <i className={`icon-${props.fontIcon}`}></i>
                 <span>{props.moodCount}</span> 
            </div>
        </div>
    )
}

export default MoodCountItem;