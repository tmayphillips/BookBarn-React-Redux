import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export class BookDetail extends Component {

  componentDidMount() {
    console.log(this.props.match.params);
  }
  render() {
    return(
      <h1>Book Detail</h1>
    )
  }
}
