import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import ImageInput from './ImageInput'
import FileInput from './FileInput'

export default class PostForm extends Component {
    state = {
        title: "",
        description: "",
        body: "",
        image_url: "",
        file_url: "",
        errors: [],
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
                <Form onSubmit={() => this.props.handleSubmit(this.state) }>
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
                    <ImageInput handleImageSuccess={this.handleImageSuccess} handleImageFailure={this.handleImageFailure}/>
                   
                    <FileInput  handleFileSuccess={this.handleFileSuccess} handleFileFailure={this.handleFileFailure} />

                    <Button type='submit'>Submit</Button>
                </Form>
            </>
        )
    }
}