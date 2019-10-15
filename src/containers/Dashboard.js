import React, { Component } from 'react'
import Nav from '../components/Nav'
import PostsContainer from './PostsContainer'
import CreatePostform from '../components/Post/CreatePostForm'
import { Switch, Route } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'
import ViewPost from '../components/Post/ViewPost'
import Profile from '../components/User/Profile'
export default class Dashboard extends Component {
    state = {
        user: {},
        posts: {},
        render: false,        
        clickedPost: {},
        showPost: false
    }

    componentDidMount() {
        fetch("http://localhost:3000/profile", 
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
        }, () => console.log("post clicked!", this.state))

    }

    findPostById = (id) => {
        return this.state.posts.find(post => post.id === id)
    }
    render() {
        return(
            <>
                <Nav image_url={this.props.image_url} logOutUser={this.props.logOutUser}/>
                <Container>
                <Message visible>Welcome, {localStorage.username}.</Message>
                <Switch>
                    <Route exact path="/posts" render={() => 
                        <PostsContainer render={this.state.render} posts={this.state.posts} token={this.props.token} loggedInUserId={this.props.loggedInUserId} handleClick={this.handleClick}/> 
                    } />
                    <Route exact path="/new" render={() =>
                        <CreatePostform  token={this.props.token} loggedInUserId={this.props.loggedInUserId} />
                    } />
                    <Route exact path="/post" render={() =>
                        <ViewPost postObj={this.state.clickedPost} token={this.props.token} loggedInUserId={this.props.loggedInUserId} />
                    } />
                    <Route exact path="/profile" render={() =>
                        <Profile user={this.state.user}/>
                    } />
                </Switch>     
                </Container>
            </>
        )
    }
}