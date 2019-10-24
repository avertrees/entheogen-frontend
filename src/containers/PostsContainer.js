import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react'
import Post from '../components/Post/Post'
import ViewPost from '../components/Post/ViewPost'
import PostsList from '../components/Post/PostsList'

export default class PostsContainer extends Component {
    state = {
        post: {},
        render: false
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
            .then(res => res.json())
            .then(res => this.setState({
                posts: res.posts,
                render: res.posts.length > 0 ? true : false
            }, () => console.log(this.state.posts))
        )
    }

    render() {
        // console.log(this.props)
        const cards = this.state.render? this.state.posts.map(post => <Post key={post.id} postObj={post} />) : null
        // const renderCards = this.state.render ? this.state.posts.map(post =>
        //     <Link key={post.id} to={`/posts`}><Post key={post.id} postObj={post} handleClick={this.props.handleClick} /></Link>
        // ) : null 


        return (
            <>
                {/* <Grid> */}
                    
                {/* <Grid.Row centered columns={4}> */}
                        {/* <Grid.Column width={8}> */}
                        {/* <h1>Posts</h1> */}
                <Card.Group> 
                    {cards}
                    {/* {renderCards} */}
                </Card.Group>
             {/* <PostsList posts={this.state.posts} handleClick={this.props.handleClick}/> */}
             {/* <Route path={`${this.props.match.url}/:post.id`} component={<ViewPost posts={this.state.posts} />} /> */}
                {/* <Route path={`${match.url}/:post.id`}  component={ViewPost} /> */}
                {/* </Grid.Column> */}
                {/* </Grid.Row> */}

                {/* </Grid> */}
            </>
        )
    }
}