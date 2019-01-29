import React, { Component } from 'react';
import '../styles/App.css';
import { Calendar } from 'react-yearly-calendar';
import moment from 'moment';
import MoodRatingBoard from './MoodRating/MoodRatingBoard';
  
class App extends Component {

state = {
  mood: {
    sad: [
      '2019-04-25',
      '2019-05-01',
      '2019-06-02',
      '2019-08-15',
      '2019-11-01'
    ],
  angry: [
        '2019-02-20',
        '2019-02-21',
        '2019-02-22',
        '2019-02-23',
      ],
happy: [
        '2019-03-20',
        '2019-03-21',
        '2019-03-22',
        '2019-03-23',
      ]
  }, 
  
   calendarShow: false,
   moodIconsShow: true 
}
 
onDatePicked = (date) => {
  alert(date);
}

handleIconClick = (mood) => {
  const {calendarShow, moodIconsShow} = this.state
  this.setState({
    calendarShow: !calendarShow, 
    moodIconsShow: !moodIconsShow
  })

  // convert date using moment.js 
  const todaysDate = new Date();
  const convertedDate = moment(todaysDate).format("YYYY-MM-DD")
  const {happy, sad, angry} = this.state.mood

  switch (mood){
    case 'great':
      // make a copy of the state because of immutability 
      const newHappyList = [...happy]
      //push new mood into list 
      newHappyList.push(convertedDate)
      this.setState({ mood: {...this.state.mood, happy: newHappyList } })
      break; 
    case 'sad':
      const newSadList = [...sad]
      newSadList.push(convertedDate)
      this.setState({ mood: {...this.state.mood, sad: newSadList } })
      break; 
    case 'angry':
      const newAngryList = [...angry]
      newAngryList.push(convertedDate)
      this.setState({ mood: {...this.state.mood, angry: newAngryList } })
      break; 
  }
}



  render() {
    return (
      <div className="wrapper">
       {this.state.calendarShow ? 
          (<Calendar 
          year={2019}
          customClasses={this.state.mood}
          calendarShow={this.state.calendarShow}
          onPickDate={this.onDatePicked}
          /> ):
          ("")
        }

        <MoodRatingBoard 
        onIconClick={this.handleIconClick}
        moodIconsShow={this.state.moodIconsShow}
        />

      </div>
    );
  }
}

export default App;



