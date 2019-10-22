import React, { Component } from 'react'
import { Image, Button, Modal, Header } from 'semantic-ui-react'
import ImageInput from './ImageInput'
export default class ImageModal extends Component {
    state = {
        image: "",
        isUploading: false,
        progress: 0,
        image_url: "",
        images: [],
        modalOpen: false
    }

    componentDidMount() {
        fetch("https://entheogen-backend.herokuapp.com/images", {
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
                this.setState({
                    images: res.images
                })
            })
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleCancel = () => this.setState({ modalOpen: false })
    
    handleClose = (url) => this.setState({ modalOpen: false }, () => this.props.handleImageSuccess(this.state.image_url))

    handleClick = (url) => this.setState({ image_url:url }, () => console.log(url))
    
    handleImageSuccess = (image_url) => {
        this.setState({ image_url: image_url })
    }

    handleImageFailure = (error) => {
        this.setState({
            error
        })
    }

    handleFileSuccess = (file_url) => {
        this.setState({ file_url: file_url })
    }

    handleFileFailure = (error) => {
        this.setState({
            error
        })
    }

    render() {
        const images = this.state.images.map((url) => <Image onClick={()=>this.handleClick(url)} src={url} alt="1x1" />)
        return (
            <>
                {/* <p className="ui button">Show Modal</p> */}
                <Modal 
                    trigger={<label onClick={this.handleOpen} className={"ui button"} >
                    select an image </label>} 
                    open={this.state.modalOpen} 
                    // onClose={this.close}    
                >
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        {/* <Image wrapped size='medium' src={this.state.image_url} /> */}
                        {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>} */}
                        {this.state.image_url && <Image alt="fuckoff" size='medium' src={this.state.image_url} />}

                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <Image.Group size='small'>
                                {images}
                            </Image.Group>
                        </Modal.Description>
                        <Modal.Actions>
                            {/* <Button
                                positive
                                icon='checkmark'
                                labelPosition='right'
                                content='Yes'
                            /> */}
                            <ImageInput handleImageSuccess={this.handleImageSuccess} handleImageFailure={this.handleImageFailure} />

                            <Button onClick={this.handleCancel} negative>Cancel</Button>
                            <Button onClick={this.handleClose} positive>OK</Button>

                        </Modal.Actions>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}