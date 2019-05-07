import React, {Component} from 'react';
import './BaseLayout.css';
import {Link, NavLink} from 'react-router-dom';
import {Menu} from './Menu'
import {Footer} from './Footer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu isAuthenticated={this.props.isAuthenticated} logout={this.props.onLogout} history={this.props.history}/>
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({type: 'LOGOUT'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(BaseLayout))
