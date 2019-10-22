import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import { Container, Message, Grid } from 'semantic-ui-react'

import Nav from '../components/Nav'
import PostsContainer from './PostsContainer'
import CreatePost from '../components/Post/CreatePost'
import ViewPost from '../components/Post/ViewPost'
import EditPost from '../components/Post/EditPost'
import Profile from '../components/User/Profile'
import EditProfile from '../components/User/EditProfile'
// import P5Wrapper from '../components/P5Wrapper/index.js'
import sketch from '../components/P5Wrapper/sketch3';

export default class Dashboard extends Component {
    state = {
        user: {},
        posts: {},
        render: false,        
        clickedPost: {},
        showPost: false,
        data: {},
        renderViz: false
    }

    componentDidMount() {
        fetch("https://entheogen-backend.herokuapp.com/profile", 
            {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
        .then(res=>res.json())
        .then(res => this.setState({
            user: res.user,
            posts: res.posts,
            render: res.posts.length >0? true : false
            }, () => console.log(this.state.user))
        )
    }

    handleClick = (id) => {
        this.setState({
            ...this.state,
            clickedPost: this.findPostById(id),
            showPost: true
        }, () => {
            this.getEEGdata(id)
            console.log("post clicked!", this.state)
        })
    }

    getEEGdata = (id) => {
        const width = this.divElement.clientWidth;
        // localStorage.canvasHeight = ght
        localStorage.canvasWidth = width
        fetch(`https://entheogen-backend.herokuapp.com/data/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(res => res.json())
            .then(res => this.setState({
                ...this.state,
                data: res.data,
                renderViz: true
            }, () => {
                console.log(this.state)
                localStorage.setItem('myData', JSON.stringify(this.state.data))
            })
            )
    }

    findPostById = (id) => {
        return this.state.posts.find(post => post.id === id)
    }

    onSetAppState = (newState, cb) => {
        this.setState(newState, cb)
    }    

    render() {
        return(
            <>
                <Nav image_url={this.state.user.image_url} logOutUser={this.props.logOutUser}/>               
                <Container >                
                <Grid>
                <Grid.Row centered> 

                <div ref={(divElement) => this.divElement = divElement}>
                <Switch>
                    <Route exact path="/" render={()=> 
                        <Message visible>Welcome, {this.state.user.name}.</Message>
                    }/>
                    <Route exact path="/posts" render={() => 
                        <PostsContainer render={this.state.render} posts={this.state.posts} token={this.props.token} loggedInUserId={this.props.loggedInUserId} handleClick={this.handleClick}/> 
                    } />
                    <Route exact path="/posts/new" render={() =>
                        <CreatePost token={this.props.token} loggedInUserId={this.props.loggedInUserId} />
                    } />
                    <Route exact path="/post" render={() =>
                        <ViewPost postObj={this.state.clickedPost} token={this.props.token} loggedInUserId={this.props.loggedInUserId} renderViz={this.state.renderViz} data={this.state.data}/>
                    } />
                    <Route exact path="/post/viz" render={() =>
                        // (<div ref={(divElement) => this.divElement = divElement}>
                        <P5Wrapper sketch={sketch} data={this.state.data} />
                        // <P5Wrapper p5Props={{ data: this.state.data, render: this.state.renderViz }} onSetAppState={this.onSetAppState}> </P5Wrapper> 
                        // </div>)
                    } />
                    <Route exact path="/post/edit" render={() =>
                        <EditPost postObj={this.state.clickedPost} token={this.props.token} loggedInUserId={this.props.loggedInUserId} />
                    } />
                    <Route exact path="/profile" render={() =>
                        <Profile user={this.state.user}/>
                    } />
                    <Route exact path="/profile/edit" render={() =>
                        <EditProfile user={this.state.user} />
                    } />
                </Switch>   
                    </div>  
                </Grid.Row>
            </Grid>
                </Container>

            </>
        )
    }
}