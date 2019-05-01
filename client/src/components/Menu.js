import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export class Menu extends Component {
  render() {
    return(
      <ul className="menu">
        <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/view-all-books">View All Books</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/add-book">Add Book</NavLink></li>
      </ul>
    )
  }
}
