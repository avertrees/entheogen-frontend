import React, { Component } from 'react'
import { Button, Form, Image } from 'semantic-ui-react'
import firebase from '../../firebase/index'
import FileUploader from "react-firebase-file-uploader";

export default class CreatePostForm extends Component {
    state = {
        logIn: false,
        title: "",
        description:"",
        body:"",
        image: "",
        image_url:"",
        eeg:"",
        eeg_url:"",
        errors: [],
        isUploading: false,
        progress: 0,
    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    
    handleProgress = progress => this.setState({ progress });
    
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ image: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ image_url: url }));
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
    }
    
    handleSubmit = () => {
        fetch("http://localhost:3000/posts",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                },
                body:JSON.stringify({
                    title: this.state.title,
                    description: this.state.description,
                    body: this.state.body,
                    image_url: this.state.image_url,
                    user_id: localStorage.userId
                })
            })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label htmlFor="title">Title</label>
                        <input
                            placeholder='title'
                            id="title"
                            type="text"
                            onChange={this.onChange}
                            name="title"
                            value={this.state.title} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="description">Description</label>
                        <input
                            placeholder='description'
                            id="description"
                            type="text"
                            onChange={this.onChange}
                            name="description"
                            value={this.state.description} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="body">Body</label>
                        <input
                            placeholder='body'
                            id="body"
                            type="text"
                            onChange={this.onChange}
                            name="body"
                            value={this.state.body} />
                    </Form.Field>
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.image_url && <Image alt="fuckoff" size='large' src={this.state.image_url} />}
                    <label className={"ui button"} >
                    upload image
                    <FileUploader
                        hidden
                        accept="image/*"
                        name="image_url"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                    </label>
                    <label className={"ui button"} >
                    upload EEG Data
                    {/* <FileUploader
                        hidden
                        accept="eeg/*"
                        name="eeg_url"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    /> */}
                    </label>
                    {/* <Form.Field>
                        <label htmlFor="image_url">Image Url</label>
                        <input
                            placeholder='image_url'
                            id="image_url"
                            type="text"
                            onChange={this.onChange}
                            name="image_url"
                            value={this.state.image_url} />
                    </Form.Field> */}
                    <Button type='submit'>Submit</Button>
                </Form>
            </>
        )
    }
}