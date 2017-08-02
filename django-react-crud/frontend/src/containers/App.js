import React, { Component } from 'react';
import store from '../store';
import {setUsername, setPassword} from '../actions'
import Heading from '../components/Heading';
import LoginContainer from '../components/Login';
import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getUsername(event){
    event.preventDefault();
    let username = event.target.value;
    store.dispatch(setUsername(username));
  }
  getPassword(event){
    event.preventDefault();
    let password = event.target.value;
    store.dispatch(setPassword(password));
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("loginData()", store.getState().loginData)
  }
  render() {
    return (
      <div>
        <Heading/>
        <LoginContainer handleSubmit={this.handleSubmit} getUsername={this.getUsername} getPassword={this.getPassword}/>
      </div>
    );
  }
}

export default App;
