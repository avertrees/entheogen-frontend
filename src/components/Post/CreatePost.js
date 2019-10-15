import React, { Component } from 'react'
// import { Button, Form, Image } from 'semantic-ui-react'
// import firebase from '../../firebase/index'
// import FileUploader from "react-firebase-file-uploader";
import PostForm from './PostForm'

export default class CreatePost extends Component {
    // state = {
    //     title: "",
    //     description:"",
    //     body:"",
    //     image_url:"",
    //     eeg:"",
    //     eeg_url:"",
    //     errors: [],
    //     isUploading: false,
    //     progress: 0,
    // }

    // onChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     }, () => console.log(this.state))
    // }

    handleSubmit = (data) => {
        console.log(data)
        fetch("http://localhost:3000/posts",
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
            .then(res => console.log(res))
    }

    render() {
        return (
            <>
            <PostForm handleSubmit={this.handleSubmit}/>
            </>
        )
    }
}