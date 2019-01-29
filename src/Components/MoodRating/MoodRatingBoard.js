import React, { Component } from 'react';
import MoodIcon from './MoodIcon';

class MoodRatingBoard extends Component {

  render() {
    const { onIconClick} = this.props; 
    return (
        this.props.moodIconsShow ? 
        (<div className="moodRatingBoard">
            <MoodIcon mood={'great'} fontIcon={'happy'} onIconClick={onIconClick}/>
            <MoodIcon mood={'good'} fontIcon={'smile'} onIconClick={onIconClick} />
            <MoodIcon mood={'meh'} fontIcon={'wondering'} onIconClick={onIconClick} />
            <MoodIcon mood={'bad'} fontIcon={'sad'} onIconClick={onIconClick}/>
            <MoodIcon mood={'awful'} fontIcon={'angry'} onIconClick={onIconClick}/>
        </div>) : ("")
    );
  }
}

export default MoodRatingBoard;



