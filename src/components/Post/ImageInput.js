import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import firebase from '../../firebase/index'
import FileUploader from "react-firebase-file-uploader";
export default class ImageInput extends Component {
    state = {
        image: "",
        isUploading: false,
        progress: 0,
        image_url: "",
        images: []
    }

    // componentDidMount(){
    //     fetch("https://entheogen-backend.herokuapp.com/images", {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + localStorage.token
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res)
    //         this.setState({
    //             images: res.images
    //         })
    //     })
    // }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false }, () => this.props.handleImageFailure(error) );
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ image: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ image_url: url }, () => this.props.handleImageSuccess(url) ));
    };

    render() {
        return (
            <>

            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
            {/* {this.state.image_url && <Image alt="fuckoff" size='large' src={this.state.image_url} />} */}
        
            <label className={"ui button"} >
                upload image file
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
            </>
        )
    }
}