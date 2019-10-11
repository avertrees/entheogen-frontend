import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import Post from '../components/Post/Post'
export default class PostsContainer extends Component {
    
    state={
        data:{},
        render:false
    }
    componentDidMount(){
        fetch("http://localhost:3002/user")
        .then(res=>res.json())
        .then(res=>this.setState({
            data:res,
            render:true
        }, () => console.log(this.state)))
    }
    
    renderCards = () => {
        this.state.data.blogs.map( (obj) =>{
            return <Post author={this.state.name} postObj={obj} />
        })
    }

    render() {
        return (
            <Container>
                <Card.Group>
                    {/* {this.state.render? this.renderCards : null} */}
                    {this.state.render ? 
                        <>
                            <Post author={this.state.data.name} postObj={this.state.data.blogs[0]} />
                            <Post author={this.state.data.name} postObj={this.state.data.blogs[1]} />
                            <Post author={this.state.data.name} postObj={this.state.data.blogs[2]} />
                        </>
                     : null }
                </Card.Group>
            </Container>
        )
    }
}