import React, { Component } from 'react';
import '../styles/App.css';
import moment from 'moment';
import CalendarPage from './CalendarPage';
import Nav from './Nav';
import Home from './Home';
import Blog from './Blog';
import MoodRatingBoard from './MoodRating/MoodRatingBoard';

import {BrowserRouter as Router,
   Route,
} from 'react-router-dom'
  
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
}
 
onDatePicked = (date) => {
  alert(date);
}

handleIconClick = (mood) => {

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
      <Router>
        <div className="wrapper">
        <Nav/>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-mood" render={(props) => 
            <MoodRatingBoard 
              onIconClick={this.handleIconClick}/>
          }/>

          <Route path="/calendar"  render={(props) => 
            <CalendarPage  
              year={2019}
              customClasses={this.state.moodType}
              onPickDate={this.onDatePicked}/>
          }/>
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
