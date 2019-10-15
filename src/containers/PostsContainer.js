import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Post from '../components/Post/Post'
// import ViewPost from '../components/Post/ViewPost'
export default class PostsContainer extends Component {
    
    // state={
    //     clickedPost:{},
    //     showPost:false
    // }
    
    // handleClick = (id) => {
    //     this.setState({
    //         ...this.state,
    //         clickedPost: this.findPostById(id),
    //         showPost: true
    //     }, () => console.log("post clicked!", this.state))

    // }

    // findPostById = (id) => {
    //     return this.props.posts.find( post => post.id === id)
    // }
    // getCards = () =>{
    //     return this.props.data.blogs.map(obj => <Post author={this.props.data.name} postObj={obj} /> )
    // }

    render() {
        const cards = this.props.render? this.props.posts.map(post => <Post key={post.id} postObj={post} handleClick={this.props.handleClick} />) : null
        console.log(this.props)
        return (
            <>
                <Card.Group>
                    {cards}
                </Card.Group>
                {/* {this.state.showPost ? 
                    <ViewPost postObj={this.state.clickedPost} />
                : 
                    <Card.Group>
                        {cards}
                    </Card.Group>
                } */}
            </>
        )
    }
}