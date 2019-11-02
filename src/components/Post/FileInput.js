import React, { Component } from 'react'
import firebase from '../../firebase/index'
import FileUploader from "react-firebase-file-uploader";
export default class FileInput extends Component {
    state = {
        file: "",
        isUploading: false,
        progress: 0,
        file_url: "",
        files:[]
    }
    componentDidMount() {
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
            // console.log(res)
            this.setState({
                files: res.files
            })
        })
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false }, () => this.props.handleFileFailure(error));
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ file: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("muse")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ file_url: url }, ()=> this.props.handleFileSuccess(url) ));
    };
    render() {
        return (
            <>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.image_url && <p>File uploaded: </p>}

                <label className={"ui button compact"} >
                    upload Muse Direct EEG Data
                    <FileUploader
                        hidden
                        accept="muse/*"
                        name="muse_url"
                        randomizeFilename
                        storageRef={firebase.storage().ref("muse")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </label>
            </>
        )
    }
}