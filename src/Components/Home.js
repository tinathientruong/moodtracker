import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div className="getStarted"> 
          <p className="moodioIntro">
          What’s the key to a happy, fulfilled life? <br/>
          Mindfulness. <br/>
          Mind your everyday mood, see the long-term trends <br/>
          and understand what makes you happy and what doesn’t.
          </p>
         <img className="happyLife" src={'https://uploads-ssl.webflow.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif'}/>
         <br/>
         <NavLink className="getStartedButton" to="/add-mood" > Try Moodio</NavLink>
      </div>
    );
  }
}
export default Home;
