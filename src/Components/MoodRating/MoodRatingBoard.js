import React from 'react';
import MoodIcon from './MoodIcon';
import { NavLink } from 'react-router-dom'

const MoodRatingBoard = (props) => {
    const { onIconClick} = props; 
    return (
      <React.Fragment>
        <div className="moodRatingBoard">
          <h1>How Are You Feeling Today?</h1>

          <div className="icon-container">
          <MoodIcon fontIcon={'happy'} onIconClick={() => onIconClick('great')}/>
          <MoodIcon  fontIcon={'smile'} onIconClick={() => onIconClick('good')} />
          <MoodIcon fontIcon={'wondering'} onIconClick={() => onIconClick('ok')} />
          <MoodIcon  fontIcon={'sad'} onIconClick={() => onIconClick('sad')}/>
          <MoodIcon  fontIcon={'angry'} onIconClick={() => onIconClick('terrible')}/>
          </div>
        </div>
              
        {/* <form onSubmit={ this.handleSubmit }>
          <input type="text" name="body_input" />
          <input type="submit" value="Submit" />
        </form> */}

        <div className="blog-entry">
          <h2>Enter Today's Entry</h2>  
          <textarea rows="4" cols="50"></textarea>
        </div>

        <NavLink to="/calendar" activeClassName="selected">TRACK YOUR MOOD!</NavLink>

      </React.Fragment>
    );
  }

export default MoodRatingBoard;


