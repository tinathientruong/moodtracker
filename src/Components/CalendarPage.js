import React from 'react';
import { Calendar } from 'react-yearly-calendar';
import MoodCountRow from './MoodCount/MoodCountRow';
  
const CalendarPage = (props) => {
    return (
        <React.Fragment>
            <Calendar 
            year={props.year}
            customClasses={props.moodList}
            />
            <MoodCountRow moodList={props.moodList}/> 
        </React.Fragment>
    );
  }

export default CalendarPage;
