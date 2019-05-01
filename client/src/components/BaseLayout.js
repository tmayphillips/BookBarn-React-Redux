import React, {Component} from 'react';
import './BaseLayout.css';
import {Link, NavLink} from 'react-router-dom';
import {Menu} from './Menu'
import {Footer} from './Footer'

export class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}
