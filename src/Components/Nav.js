import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div className="navWrapper">
        <NavLink className="navItem" exact activeClassName="selected" to="/"> Home </NavLink>
        <NavLink className="navItem" to="/calendar" activeClassName="selected" > Calendar </NavLink> 
        <NavLink className="navItem" to="/blog" activeClassName="selected"> Entries</NavLink>
      </div>
    );
  }
}
export default Nav;
