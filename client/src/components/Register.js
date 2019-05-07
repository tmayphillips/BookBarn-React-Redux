import React, {Component} from 'react'
import axios from 'axios'
import {setAuthenticationHeader} from '../utils/authenticate'

class Register extends Component {

  registerButtonClick = () => {
    // send username and password to server
    axios.post('http://localhost:8080/register',{
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
    return(
      <div>
        <h1>Register</h1>
        <input name="username" onChange={this.handleTextBoxChange} placeholder="login"></input>
        <input name="password" type="password" onChange={this.handleTextBoxChange} placeholder="password"></input>
        <button onClick={this.registerButtonClick}>Register</button>
      </div>
    )
  }
}

export default Register
