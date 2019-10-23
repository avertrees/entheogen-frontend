import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import PostForm from './PostForm'
export default class EditPost extends Component {
    
    state={
        post:{},
        render:false
    }

    componentDidMount(){
        let postId = this.renderURL()
        fetch(`https://entheogen-backend.herokuapp.com/posts/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(res => res.json())
            .then(res => this.setState({
                post: res.post,
                render: true
            }, () => console.log(this.state)))
    }

    renderURL = () => {
        let url = window.location.href
        let urlArray = url.split("/")
        return urlArray[urlArray.length - 2]
    }

    handleSubmit = (data) => {
        // console.log(data)
        fetch(`https://entheogen-backend.herokuapp.com/posts/${this.state.post.id}`,
            {
                method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                },
                body: JSON.stringify({
                    title: data.title,
                    description: data.description,
                    body: data.body,
                    image_url: data.image_url,
                    data_file_url: data.file_url,
                    user_id: localStorage.userId
                })
            })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    deletePost = () => {
        fetch(`https://entheogen-backend.herokuapp.com/posts/${this.state.post.id}`,
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
    }
    render() {
        return(
            <>
                <Button onClick={this.deletePost}>Delete Post</Button>
                {this.state.render ? <PostForm handleSubmit={this.handleSubmit} body={this.state.post.body} title={this.state.post.title} description={this.state.post.description} image_url={this.state.post.image_url} file_url={this.state.post.data_file_url}/> : null }
            </>
        )
    }
}