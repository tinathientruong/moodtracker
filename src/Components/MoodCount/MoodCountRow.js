import React from 'react';
import MoodCountItem from './MoodCountItem';

const MoodCountRow = (props) => {

    return (
        <div className="moodCount">
           <MoodCountItem mood={'great'} fontIcon={'happy'} moodCount={props.moodList.great.length}/>
           <MoodCountItem mood={'good'} fontIcon={'smile'} moodCount={props.moodList.good.length}/>
           <MoodCountItem mood={'ok'} fontIcon={'wondering'} moodCount={props.moodList.ok.length}/>
           <MoodCountItem mood={'sad'} fontIcon={'sad'} moodCount={props.moodList.sad.length}/>
           <MoodCountItem mood={'terrible'} fontIcon={'angry'} moodCount={props.moodList.terrible.length}/>
        </div>
    );  
  }

export default MoodCountRow;

