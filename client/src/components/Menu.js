import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export class Menu extends Component {

  handleLogoutCLick = () => {
    console.log(this.props.isAuthenticated);
    localStorage.removeItem('jsonwebtoken')
    this.props.logout()
    this.props.history.push('/')
    console.log("handleLogoutCLick");
  }

  render() {
    return(
      <ul className="menu">
        <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/view-all-books">View All Books</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/add-book">Add Book</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/register">Join</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/login">Log In</NavLink></li>
        <li><a onClick={this.handleLogoutCLick} href="#" >Log Out</a></li>
        <li><NavLink activeClassName="active-link" to="/cart">View Cart</NavLink></li>
        <li><NavLink activeClassName="active-link" to="/favorites">View Favorites</NavLink></li>
      </ul>
    )
  }
}
