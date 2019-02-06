import React, { Component } from 'react';
import MoodIcon from './MoodIcon';
import {Redirect} from 'react-router-dom'
import MyList from '../Blog/MyList'

const MoodRatingBoard= (props) => {
    const {onIconClick, formRedirect} = props;
    if (formRedirect) {
      return <Redirect to="/Calendar" />
    }
    return (
      <React.Fragment>
        <div className="moodRatingBoard">
          <form onSubmit={props.onFormSubmit}>
          <fieldset>
            <legend>
              <h1 className="feelingQuestion">How Are You Feeling Today?</h1>
          </legend>
            <MoodIcon fontIcon={'happy'} mood={'great'} onIconClick={()=> onIconClick('great')} />
            <MoodIcon  fontIcon={'smile'}  mood={'good'} onIconClick={()=> onIconClick('good')} />
            <MoodIcon fontIcon={'wondering'} mood={'ok'} onIconClick={()=> onIconClick('ok')}/>
            <MoodIcon  fontIcon={'sad'}  mood={'sad'} onIconClick={()=> onIconClick('sad')}/>
            <MoodIcon fontIcon={'angry'} mood={'terrible'}onIconClick={()=> onIconClick('terrible')}/>
          </fieldset>
        {/* <MyList/> */}
         <button className="trackButton">Track Your Mood!</button>
          </form>
        
        </div>



      </React.Fragment>
    );
  }

export default MoodRatingBoard;


