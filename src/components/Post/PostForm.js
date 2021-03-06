import React, { Component } from 'react'
import { Button, Form, Image, Grid} from 'semantic-ui-react'
// import ImageInput from './ImageInput'
import FileInput from './FileInput'
import ImageModal from './ImageModal'

export default class PostForm extends Component {
    state = {
        title: "",
        description: "",
        body: "",
        image_url: "",
        file_url: "",
        errors: [],
        isValid: false
    }

    componentDidMount = () => {
        const title = !!this.props.title ? this.props.title : ""
        const description = !!this.props.description ? this.props.description : ""
        const body = !!this.props.body ? this.props.body : ""
        const image_url = !!this.props.image_url ? this.props.image_url : ""
        const file_url = !!this.props.file_url ? this.props.file_url : ""
        const defaultState = {
            title,
            description,
            body, 
            image_url,
            file_url
        }
        this.setState(defaultState, () => console.log(this.state))

    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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

    isValid = () => {
        return this.state.file_url && this.state.file_url !== ""
    }
    render() {
        return (
            <>
                <Grid >
                    <Grid.Row centered>
                        <Grid.Column width={12}>
                <Form onSubmit={() => this.props.handleSubmit(this.state) }>
                    <Form.Input
                        label="Title"
                        placeholder={this.state.title}
                        id="title"
                        type="text"
                        onChange={this.onChange}
                        name="title"
                        value={this.state.title}
                    />
                    
                    <Form.Input
                        label="Description"
                        placeholder={this.state.description}
                        id="description"
                        type="text"
                        onChange={this.onChange}
                        name="description"
                        value={this.state.description} />
                    
                    <Form.TextArea 
                        label="Body" 
                        placeholder={this.state.body}
                        id="body"
                        type="text"
                        onChange={this.onChange}
                        name="body"
                        value={this.state.body} />
                    
                                {!!this.state.image_url ? <Image className="field" alt="bloo" size='large' src={this.state.image_url} /> : null }
                    
                    <ImageModal image_url={this.state.image_url} handleImageSuccess={this.handleImageSuccess}/>

                    {/* <ImageInput handleImageSuccess={this.handleImageSuccess} handleImageFailure={this.handleImageFailure} /> */}
                    
                    {!!this.state.file_url ? <p>File: {this.state.file_url}</p> : null}

                    <FileInput  handleFileSuccess={this.handleFileSuccess} handleFileFailure={this.handleFileFailure} />
                    {/* <Form.Button content='Submit' /> */}
                    {this.isValid ? <Button compact type='submit'>Submit</Button> : <Button disabled compact type='submit'>Submit</Button> }
                </Form>
                </Grid.Column>
                    </Grid.Row>
                </Grid>
                    
                    
            </>
        )
    }
}