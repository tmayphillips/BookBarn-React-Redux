import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthenticationHeader} from '../utils/authenticate'

class Login extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }
  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginButtonClick = () => {
    // send username and password to server
    axios.post('http://localhost:8080/login',{
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      let token = response.data.token
      let userID = response.data.userID
      console.log(token)
      console.log(userID)
      localStorage.setItem('jsonwebtoken',token)
      this.props.onAuthenticated(token,userID)
      setAuthenticationHeader(token)
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input name="username" onChange={this.handleTextBoxChange} placeholder="login"></input>
        <input name="password" type="password" onChange={this.handleTextBoxChange} placeholder="password"></input>
        <button onClick={this.loginButtonClick}>Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: (token,userID) => dispatch({type: "ON_AUTHENTICATED", token: token, userID: userID})
  }
}

export default connect(null,mapDispatchToProps)(Login)
