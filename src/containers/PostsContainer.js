import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Post from '../components/Post/Post'
export default class PostsContainer extends Component {

    render() {
        const cards = this.props.render? this.props.posts.map(post => <Post key={post.id} postObj={post} handleClick={this.props.handleClick} />) : null
        return (
            <>
                <h1>Posts</h1>
                <Card.Group>
                    {cards}
                </Card.Group>
            </>
        )
    }
}