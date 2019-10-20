import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Post from '../components/Post/Post'
// import ViewPost from '../components/Post/ViewPost'
export default class PostsContainer extends Component {

    render() {
        const cards = this.props.render? this.props.posts.map(post => <Post key={post.id} postObj={post} handleClick={this.props.handleClick} />) : null
        // console.log(this.props)
        return (
            <>
                <Card.Group>
                    {cards}
                </Card.Group>
            </>
        )
    }
}