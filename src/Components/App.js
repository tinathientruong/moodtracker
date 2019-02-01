import React, { Component } from 'react';
import '../styles/App.css';
import { Calendar } from 'react-yearly-calendar';
import moment from 'moment';
import MoodRatingBoard from './MoodRating/MoodRatingBoard';
import MoodCountRow from './MoodCount/MoodCountRow';
  
class App extends Component {

state = {
  moodType: {
    great: [
      '2019-01-01',
      '2019-01-15',
      '2019-01-16',
      '2019-01-21',
      '2019-01-25',
      '2019-01-26'
    ], 
    good: [
      '2019-01-02',
      '2019-01-04',
      '2019-01-11',
      '2019-01-14',
      '2019-01-20',
      '2019-01-28'

    ], 
    ok: [
      '2019-01-03',
      '2019-01-10',
      '2019-01-17',
      '2019-01-18',
      '2019-01-19',
      '2019-01-24',
      '2019-01-27'

    ], 
    sad: [
      '2019-01-05',
      '2019-01-06',
      '2019-01-07',
      '2019-01-12',
      '2019-01-23'

    ],
    terrible: [
      '2019-01-08',
      '2019-01-09',
      '2019-01-13',
      '2019-01-22',
      '2019-01-29',
      '2019-01-30'
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
  const {great, good, ok ,sad, terrible} = this.state.moodType

  switch (mood){
    case 'great':
      // make a copy of the state because of immutability 
      const newGreatList = [...great]
      //push new mood into list 
      newGreatList.push(convertedDate)
      this.setState({ moodType: {...this.state.moodType, great: newGreatList } })
      console.log(newGreatList)
      break; 

    case 'good':
      const newGoodList = [...good]
      newGoodList.push(convertedDate)
      this.setState({ moodType: {...this.state.moodType, good: newGoodList } })
      break; 

    case 'ok':
      const newOkList = [...ok]
      newOkList.push(convertedDate)
      this.setState({ moodType: {...this.state.moodType, ok: newOkList } })
      break; 

    case 'sad':
      const newSadList = [...sad]
      newSadList.push(convertedDate)
      this.setState({ moodType: {...this.state.moodType, sad: newSadList } })
      break; 

    case 'terrible':
      const newTerribleList = [...terrible]
      newTerribleList.push(convertedDate)
      this.setState({ moodType: {...this.state.moodType, terrible: newTerribleList } })
      break; 
  }
}

  render() {
    return (
      <div className="wrapper">
       {this.state.calendarShow ? 
          (<Calendar 
          year={2019}
          customClasses={this.state.moodType}
          calendarShow={this.state.calendarShow}
          onPickDate={this.onDatePicked}
          /> ):
          ("")
        }

        <MoodRatingBoard 
        onIconClick={this.handleIconClick}
        moodIconsShow={this.state.moodIconsShow}
        />
        <MoodCountRow moodList={this.state.moodType}/>
      </div>
    );
  }
}

export default App;



