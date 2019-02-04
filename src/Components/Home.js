import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
         Want to track your mood over the year ? 
         <NavLink to="/add-mood" > GET STARTED</NavLink>
      </div>
    );
  }
}
export default Home;
