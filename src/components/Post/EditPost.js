import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import PostForm from './PostForm'
import { withRouter } from 'react-router-dom'

class EditPost extends Component {
    
    state={
        post:{},
        render:false,
        toPost: false
    }

    componentDidMount(){
        console.log(this.props.location)

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
        // console.log(url)
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
                    user_id: localStorage.userId,
                    toPost: true
                })
            })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                this.props.history.push(`/post/${this.state.post.id}`)
                // window.location.href
                // window.location.pathname = "/posts"
                // this.history.replace("/posts")
            })
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
            .then(res => {
                // console.log(res)
                this.setState({
                    toPost: true
                })
                this.props.history.push('/posts')
            })
    }

    render() {
        // if (this.state.toPost) {
        //     <Redirect to='/posts' />
        // }
        return(
            <>
                {this.state.render ? <PostForm handleSubmit={this.handleSubmit} body={this.state.post.body} title={this.state.post.title} description={this.state.post.description} image_url={this.state.post.image_url} file_url={this.state.post.data_file_url}/> : null }
                <div>
                    <Button className={"delete_button"} compact fluid floated="center" onClick={this.deletePost}>Delete Post</Button> 
                </div>
            </>
        )
    }
}
export default withRouter(EditPost)