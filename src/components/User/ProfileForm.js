import React, { Component } from 'react'
import { Button, Form, Image, Grid } from 'semantic-ui-react'
import ImageInput from '../Post/ImageInput'

export default class PostForm extends Component {
    state = {
        name: "",
        bio: "",
        image_url: "",
        errors: [],
    }

    componentDidMount = () => {
        const name = this.props.user.name 
        const bio = this.props.user.bio 
        const image_url = this.props.user.image_url 
   
        const defaultState = {
            name,
            bio,
            image_url
        }
        this.setState(defaultState, () => console.log(this.state))

    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
    }

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
        return (
            <>     
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={12}>
                {/* <Form onSubmit={() => this.props.handleSubmit(this.state)}> */}
                    <Form>
                    <Form.Input
                        label="Name"
                        placeholder={this.state.name}
                        id="name"
                        type="text"
                        onChange={this.onChange}
                        name="name"
                        value={this.state.name}
                    />

                    <Form.Input
                        label="Bio"
                        placeholder={this.state.bio}
                        id="bio"
                        type="text"
                        onChange={this.onChange}
                        name="bio"
                        value={this.state.bio} />

                    <Image alt="bloo" size='large' src={this.props.user.image_url} /> 

                    <ImageInput handleImageSuccess={this.handleImageSuccess} handleImageFailure={this.handleImageFailure} />

                    <Button onClick={() => this.props.handleSubmit(this.state)} type='submit'>Submit</Button>
                </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
        )
    }
}