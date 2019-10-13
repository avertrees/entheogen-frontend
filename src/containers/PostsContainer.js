import React, { Component } from 'react'
import { Card} from 'semantic-ui-react'
import Post from '../components/Post/Post'
export default class PostsContainer extends Component {
    
    // state={
    //     data:{},
    //     render:false
    // }
    
    // renderCards = () => {
    //     return (<Card.Group>
    //         {
    //             this.getCards
    //         }
    //     </Card.Group>
    //     )
    // }

    // getCards = () =>{
    //     return this.props.data.blogs.map(obj => <Post author={this.props.data.name} postObj={obj} /> )
    // }

    render() {
        return (
            <>
                
                {/* <Card.Group> */}
                    
                {this.props.render ? 
                    (
                        <Card.Group>
                        <Post postObj={this.props.posts[0]} />
                        <Post postObj={this.props.posts[1]} />
                        <Post postObj={this.props.posts[2]} />
                        </Card.Group>
                    )
                        
                        
                    : null }
                {/* </Card.Group>  */}
                
            </>
        )
    }
}