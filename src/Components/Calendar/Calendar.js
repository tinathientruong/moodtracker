import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar } from 'react-yearly-calendar';
  
class Calendar extends Component {

  render() {
    return (
       <Calendar 
        year={this.props.year}
        customClasses={this.props.mood}
        />
    );
  }
}

export default Calendar;





