import React, { Component } from 'react'
import PostForm from './PostForm'
// import { Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class CreatePost extends Component {
    componentDidMount(){
        fetch("https://entheogen-backend.herokuapp.com/images",{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
        .then(res=>res.json())
        .then(res => {
            console.log(res)
            
        })
    }
    getFiles = () => {
        fetch("https://entheogen-backend.herokuapp.com/files", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }
    handleSubmit = (data) => {
        // console.log(event)
        fetch("https://entheogen-backend.herokuapp.com/posts",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                },
                body:JSON.stringify({
                    title: data.title,
                    description: data.description,
                    body: data.body,
                    image_url: data.image_url,
                    data_file_url: data.file_url,
                    user_id: localStorage.userId
                })
            })
            .then(res => res.json())
            .then(res => { 
                this.props.history.push(`/post/${res.post.id}`)
                // console.log(res)
            })
        // console.log(data)
    }

    render() {
        return (
            <>


            
            <PostForm handleSubmit={this.handleSubmit}/>
            

            </>
            
        )
    }
}

export default withRouter(CreatePost)