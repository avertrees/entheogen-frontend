import React, { Component } from 'react'
import { Image, Button, Modal, Header, Grid } from 'semantic-ui-react'
import ImageInput from './ImageInput'

let img1 = "https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F3b554e8a-9c6c-4b43-9cfd-4acce6680229.jpeg?alt=media&token=fa87766c-adcb-42dd-adb1-2ec37aaf659b"
let img2 = "https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F3b554e8a-9c6c-4b43-9cfd-4acce6680229.jpeg?alt=media&token=fa87766c-adcb-42dd-adb1-2ec37aaf659b"
let img3 = "https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F038c6221-950c-49d4-9985-f9e255fa5e70.png?alt=media&token=c4ed72a8-9551-4d19-9da3-f1ef860e48fa"
let img4 = "https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F6b9c4b5e-769a-4c2e-8bbb-9cb1ee44487f.jpg?alt=media&token=0150a958-ecb1-44ee-b087-34570829781f"
let img5 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F7b102b14-9b41-4706-8647-9fb7f466ceae.png?alt=media&token=3935eaab-fc4b-4c8c-bdea-9ded7871d4cc"
let img6 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F70ddefb8-f56b-4aa4-8738-808099dc03cd.png?alt=media&token=02243db1-de5c-4cdd-8c90-e3b2586323a0"
let img7 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2F9c8422b6-71f9-4342-a62e-1c320d088f92.jpeg?alt=media&token=fbfe1b7e-3db1-40e5-8cf4-bed0ed0e38d7"
let img8 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2Fa2b974f7-4c9c-460f-bfe6-4349b17c1869.jpeg?alt=media&token=77553937-ad46-4344-85bb-738748da82c2"
let img9 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2Fb8464a78-f448-4acd-97d0-39b612855603.png?alt=media&token=a77d8829-12dc-4c81-a41c-85b355768890"
let img10 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2Fc36872f2-ebb9-459d-9a27-cbf80f44c395.jpeg?alt=media&token=35761183-25d7-42a5-95b0-c28de5900091"
let img11= "https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2Ff481d318-ba08-45a7-9f77-1d52c3bcbeeb.png?alt=media&token=5f1a4c5c-3479-4363-93ec-a3e985991ac5"
let img12 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2Fe0d8a0d4-d858-4686-8aec-59c6c8634a3c.png?alt=media&token=cd680c7b-2a5b-48d4-8501-cb1b1fd68fca"
let img13 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2FTube_02.jpg?alt=media&token=295cbfe6-92dc-4d8f-a865-61e5bdf86250"
let img14 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2FTube_11.jpg?alt=media&token=9af142b3-d67c-476a-856c-8708775287ff"
let img15 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2FTube_06.jpg?alt=media&token=e898fc71-9937-4bf9-8829-aa188e070964"
let img16 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2FAlpha_Smiley.png?alt=media&token=de657cc4-1fd0-4ee2-b47e-d1fbdb87b808"
let img17 ="https://firebasestorage.googleapis.com/v0/b/entheogen-a76f2.appspot.com/o/images%2FAlpha_Stripes.png?alt=media&token=4ed8c907-eca4-4b54-8582-076e510cda10"
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
        const image_url = !!this.props.image_url ? this.props.image_url : img1
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
                // console.log(res)
                let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17]
                this.setState({
                    image_url,
                    images: [...arr, ...res.images]
                })
            })
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleCancel = () => this.setState({ modalOpen: false })
    // this.handleImageSuccess(this.state.image_url)
    handleClose = () => this.setState({ modalOpen: false }, () => this.props.handleImageSuccess(this.state.image_url) )

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
        // <Card onClick={() => this.handleCslick(url)} image={url} />
        // <Image size='small' onClick={() => this.handleClick(url)} src={url} alt="1x1" />
        const images = this.state.images.map((url) => <Image size='small' onClick={() => this.handleClick(url)} src={url} alt="1x1" /> )
        return (
            <>
                {/* <p className="ui button">Show Modal</p> */}
                <Modal 
                    trigger={<label onClick={this.handleOpen} className={"ui compact button"} >
                    select an image </label>} 
                    open={this.state.modalOpen} 
                    // onClose={this.close}    
                >
                    <Modal.Header>Select a Photo                             
                    <Button.Group compact floated="right">
                        <ImageInput handleImageSuccess={this.handleImageSuccess} handleImageFailure={this.handleImageFailure} />
                        <Button onClick={this.handleCancel} negative>Cancel</Button>
                        <Button onClick={this.handleClose} positive>OK</Button>
                    </Button.Group></Modal.Header>
                    <Modal.Content image>
                        {/* <Image wrapped size='medium' src={this.state.image_url} /> */}
                        {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>} */}
                        {this.state.image_url ? <Image alt="fuckoff" className="modal_img" size='large' src={this.state.image_url} /> : <Image className="modal_img" alt="fuckoff" size='large' src={this.props.image_url} /> }

                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <Image.Group size='small' >
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
                        </Modal.Actions>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}