import React, { Component } from 'react'
import Nav from '../components/Nav'
import PostsContainer from './PostsContainer'
import CreatePostform from '../components/Post/CreatePostForm'
import { Switch, Route } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'

export default class Dashboard extends Component {
    state = {
        posts: {},
        render: false
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

    render() {
        return(
            <>
                <Nav logOutUser={this.props.logOutUser}/>
                <Container>
                <Message visible>Welcome, {localStorage.username}.</Message>
            <Switch>
                <Route exact path="/" render={() => 
                    <PostsContainer render={this.state.render} posts={this.state.posts} token={this.props.token} loggedInUserId={this.props.loggedInUserId} /> 
                } />
                <Route exact path="/new" render={() =>
                    <CreatePostform  token={this.props.token} loggedInUserId={this.props.loggedInUserId} />
                } />
            </Switch>     
                </Container>
            </>
        )
    }
}