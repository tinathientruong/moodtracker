import React, { Component } from 'react';
import { Calendar } from 'react-yearly-calendar';
  
const Calendar = () => {
    return (
       <Calendar 
        year={props.year}
        customClasses={props.mood}
        />
    );
  }

export default Calendar;





