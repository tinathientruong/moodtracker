import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div>
        <NavLink exact activeClassName="selected" to="/"> Go To Home Page </NavLink>
        <NavLink to="/calendar" activeClassName="selected" > Calendar </NavLink> 
        <NavLink to="/blog" activeClassName="selected"> Entries</NavLink>
      </div>
    );
  }
}
export default Nav;
