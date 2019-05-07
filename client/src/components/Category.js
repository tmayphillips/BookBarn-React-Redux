import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, Input, UncontrolledAlert} from 'reactstrap'
import * as actionCreators from '../store/actions/actionCreators'
import {Link} from 'react-router-dom'


class Category extends Component {
  render() {
    return (
      <div>
        <h1>Browse by Category</h1>
        <Link to='/books/arts'>Arts & Photography</Link>
      </div>
    )
  }
}

export default Category
