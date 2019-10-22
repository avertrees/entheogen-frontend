import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Nav from '../Nav'
import Login from '../Login'
// import P5Wrapper from '../P5Wrapper/index.js'
// import PostsContainer from '../../containers/PostsContainer'
import Dashboard from '../../containers/Dashboard'
export default class App extends Component {
  
  state = {
    slider: 5,
    frameRate: null,
    data: {}, 
    index: 0,
    loggedInUserId:null,
    username:null,
    name:null,
    token: null,
    render: false,
    profile_pic: null
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
    return !!this.state.token || !!localStorage.token //!!this.state.loggedInUserId
  }

  logInUser = (token, userId, username, name, image_url) => {
    localStorage.token = token
    localStorage.userId = userId
    localStorage.username = username
    localStorage.name = name
    this.setState({
      token: token,
      loggedInUserId: userId,
      username: username,
      name: name,
      profile_pic: image_url 
    })
  }

  logOutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    delete localStorage.username
    delete localStorage.name
    this.setState({
      token: null,
      loggedInUserId: null,
      username: null,
      name:null
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
      <Router>
      <Route path='/' render={ 
        () => (
          // <Container id="main">
          <>
            {/* <Nav /> */}
            {
              this.isLoggedIn()
                ? <>
                  {/* <button onClick={this.logOutUser}>LOG OUT</button> */}
                  <Dashboard logOutUser={this.logOutUser} token={this.state.token} loggedInUserId={this.state.loggedInUserId} image_url={this.state.profile_pic} />
                  {/* <PostsContainer token={this.state.token} loggedInUserId={this.state.loggedInUserId} /> */}
                </>
                : <Login logInUser={this.logInUser} />
            }
        {/* </Container> */}
        </>
        )
        }
      />
      
      </Router>
      )
  }
}

