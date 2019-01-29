import React, { Component } from 'react';
import MoodIcon from './MoodIcon';

class MoodRatingBoard extends Component {

  render() {
    const { onIconClick} = this.props; 
    return (
        this.props.moodIconsShow ? 
        (<div className="moodRatingBoard">
            <MoodIcon fontIcon={'happy'} onIconClick={() => this.props.onIconClick('great')}/>
            <MoodIcon  fontIcon={'smile'} onIconClick={() => this.props.onIconClick('ok')} />
            <MoodIcon fontIcon={'wondering'} onIconClick={() => this.props.onIconClick('meh')} />
            <MoodIcon  fontIcon={'sad'} onIconClick={() => this.props.onIconClick('sad')}/>
            <MoodIcon  fontIcon={'angry'} onIconClick={() => this.props.onIconClick('angry')}/>
        </div>) : ("")
    );
  }
}

export default MoodRatingBoard;


