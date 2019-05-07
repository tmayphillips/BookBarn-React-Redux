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
  loginButtonClick = () => {
    // send username and password to server
    axios.post('http://localhost:8080/login',{
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      let token = response.data.token
      console.log(token)
      localStorage.setItem('jsonwebtoken',token)
      this.props.onAuthenticated(token)
      setAuthenticationHeader(token)
    }).catch(error => console.log(error))
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
    onAuthenticated: (token) => dispatch({type: "ON_AUTHENTICATED"})
  }
}

export default connect(null,mapDispatchToProps)(Login)
