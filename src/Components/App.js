import React, { Component } from 'react';
import '../styles/App.css';
import { Calendar } from 'react-yearly-calendar';
import MoodRatingBoard from './MoodRating/MoodRatingBoard';
  
class App extends Component {

state = {
  mood: {
      sad: [
          '2018-04-25',
          '2018-05-01',
          '2018-06-02',
          '2018-08-15',
          '2018-11-01'
        ],
        angry: [
            '2018-02-20',
            '2018-02-21',
            '2018-02-22',
            '2018-02-23',
          ],
        happy: [
            '2018-03-20',
            '2018-03-21',
            '2018-03-22',
            '2018-03-23',
          ]
  }, 
   date: '', 
   calendarShow: false,
   moodIconsShow: true 
}
 
onDatePicked = (date) => {
  alert(date);
}

handleIconClick = (event) => {
  const {calendarShow, moodIconsShow} = this.state
  this.setState({calendarShow: !calendarShow, moodIconsShow: !moodIconsShow})
}

  render() {
    return (
      <div className="wrapper">
       {this.state.calendarShow ? 
        (<Calendar 
        year={2018}
        customClasses={this.state.mood}
        calendarShow={this.state.calendarShow}
        onPickDate={this.onDatePicked}
        /> ):("")}
        <MoodRatingBoard 
        onIconClick={this.handleIconClick}
        moodIconsShow={this.state.moodIconsShow}
        />
      </div>
    );
  }
}

export default App;



