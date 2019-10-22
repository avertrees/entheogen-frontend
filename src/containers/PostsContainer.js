import React, { Component } from 'react'
import { Card, Grid } from 'semantic-ui-react'
import Post from '../components/Post/Post'
export default class PostsContainer extends Component {

    render() {
        const cards = this.props.render? this.props.posts.map(post => <Post key={post.id} postObj={post} handleClick={this.props.handleClick} />) : null
        return (
            <>
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={12}>
                <h1>Posts</h1>
                <Card.Group>
                    {cards}
                </Card.Group>
                
                </Grid.Column>
                </Grid.Row>

                </Grid>
            </>
        )
    }
}