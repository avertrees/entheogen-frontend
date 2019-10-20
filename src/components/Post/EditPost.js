import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import PostForm from './PostForm'
export default class EditPost extends Component {
    handleSubmit = (data) => {
        // console.log(data)
        fetch(`http://localhost:3000/posts/${this.props.postObj.id}`,
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
        fetch(`http://localhost:3000/posts/${this.props.postObj.id}`,
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
                <PostForm handleSubmit={this.handleSubmit} body={this.props.postObj.body} title={this.props.postObj.title} description={this.props.postObj.description} image_url={this.props.postObj.image_url} file_url={this.props.postObj.data_file_url}/>
            </>
        )
    }
}