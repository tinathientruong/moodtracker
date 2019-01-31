import React, { Component } from 'react';
import MoodIcon from './MoodIcon';
import MoodCountRow from '../MoodCount/MoodCountRow';

const MoodRatingBoard = (props) => {
    const { onIconClick, moodIconsShow} = props; 
    return (
        moodIconsShow ? 
        (<div className="moodRatingBoard">
          <h1>How Are You Feeling Today?</h1>
            <div>
              <MoodIcon fontIcon={'happy'} onIconClick={() => onIconClick('great')}/>
              <MoodIcon  fontIcon={'smile'} onIconClick={() => onIconClick('ok')} />
              <MoodIcon fontIcon={'wondering'} onIconClick={() => onIconClick('meh')} />
              <MoodIcon  fontIcon={'sad'} onIconClick={() => onIconClick('sad')}/>
              <MoodIcon  fontIcon={'angry'} onIconClick={() => onIconClick('angry')}/>
            </div>
        </div>) : ("")
    );
  }

export default MoodRatingBoard;


