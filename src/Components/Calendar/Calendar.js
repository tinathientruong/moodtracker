import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar } from 'react-yearly-calendar';
  
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
  }
}

  render() {
    return (
      <Calendar 
      year={2018}
      customClasses={this.state.mood}
      />
    );
  }
}

export default App;



