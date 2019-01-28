import React, { Component } from 'react';
import MoodIcon from './MoodIcon';

class MoodRatingBoard extends Component {

    onIconClick = () => {
        // passing in the state of mood 
    }

  render() {
    return (
        <div className="moodRatingBoard">
            <MoodIcon mood={'great'} fontIcon={'happy'} onClick={this.props.onTest('happy')}/>
            <MoodIcon mood={'good'} fontIcon={'smile'} onClick={this.props.onTest('smile')}/>
            <MoodIcon mood={'meh'} fontIcon={'wondering'} onClick={this.props.onTest('wondering')}/>
            <MoodIcon mood={'bad'} fontIcon={'sad'} onClick={this.props.onTest('sad')}/>
            <MoodIcon mood={'awful'} fontIcon={'angry'} onClick={this.props.onTest('angry')}/>
        </div>
    );
  }
}

export default MoodRatingBoard;



