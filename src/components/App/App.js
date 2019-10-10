import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import Nav from '../Nav'
import Login from '../Login'
// import P5Wrapper from '../P5Wrapper/index.js'
import PostsContainer from '../../containers/PostsContainer'
export default class App extends Component {
  
  state = {
    slider: 5,
    frameRate: null,
    data: {}, 
    index: 0,
    loggedInUserId:null,
    token: null,
    render: false
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000/data")
  //   .then(res => res.json())
  //   .then(res => this.setState({
  //     ...this.state,
  //     data: res,
  //     render:true,
  //     token: localStorage.token
  //   }, () => localStorage.setItem('myData', JSON.stringify(this.state.data))))
   
  // }
  
  isLoggedIn(){
    return !this.state.token //!!this.state.loggedInUserId
  }

  logInUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  logOutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  // onSetAppState = (newState, cb) => { 
  //   this.setState(newState, cb)
  // }

  // onSliderChange = (event) => {
  //   this.setState({ slider: +event.target.value })
  // }

      // { /* <> */}
      // {/* {this.state.render ? <P5Wrapper p5Props={{ slider: this.state.slider, data: this.state.data, render: this.state.render}} onSetAppState={this.onSetAppState}> </P5Wrapper> : null} */}
      // {/* </> */}
  render() {
    return (
      <Container>
      <Nav/>
      {
        this.isLoggedIn() 
        ? <>
          <button onClick={ this.logOutUser }>LOG OUT</button>
          <PostsContainer token={ this.state.token } loggedInUserId={ this.state.loggedInUserId } />
          </> 
        : <Login logInUser={ this.logInUser } />
      }
      </Container>
      )
  }
}

