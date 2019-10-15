import React, { Component } from 'react'
import firebase from '../../firebase/index'
import FileUploader from "react-firebase-file-uploader";
export default class FileInput extends Component {
    state = {
        file: "",
        isUploading: false,
        progress: 0,
        file_url: ""
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
            .ref("eeg")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ file_url: url }, ()=> this.props.handleFileSuccess(url) ));
    };
    render() {
        return (
            <>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.image_url && <p>File uploaded: </p>}

                <label className={"ui button"} >
                    upload EEG Data
                    <FileUploader
                        hidden
                        accept="eeg/*"
                        name="eeg_url"
                        randomizeFilename
                        storageRef={firebase.storage().ref("eeg")}
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