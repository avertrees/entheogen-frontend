import React, { Component } from 'react'
import { Button, Form, Image} from 'semantic-ui-react'
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
        const title = !!this.props.title? this.props.title : 'title'
        const description = !!this.props.description ? this.props.description : 'description' 
        const body = !!this.props.body ? this.props.body : 'body' 
        const titleVal = !!this.state.title ? this.state.title : this.props.title
        const descriptionVal = !!this.state.description ? this.state.description : this.props.description 
        const bodyVal = !!this.state.body ? this.state.body : this.props.body
        return (
            <>
                <Form onSubmit={() => this.props.handleSubmit(this.state) }>
                    <Form.Input
                        label="Title"
                        placeholder={title}
                        id="title"
                        type="text"
                        onChange={this.onChange}
                        name="title"
                        value={titleVal}
                    >
                        {/* <label htmlFor="title">Title</label>
                        <input
                            placeholder={title}
                            id="title"
                            type="text"
                            onChange={this.onChange}
                            name="title"
                            value={titleVal} /> */}
                    </Form.Input>
                    <Form.Input
                        label="Description"
                        placeholder={description}
                        id="description"
                        type="text"
                        onChange={this.onChange}
                        name="description"
                        value={descriptionVal}>
                        {/* <label htmlFor="description">Description</label>
                        <input
                            placeholder={description}
                            id="description"
                            type="text"
                            onChange={this.onChange}
                            name="description"
                            value={descriptionVal} /> */}
                    </Form.Input>
                    <Form.TextArea 
                        label="Body" 
                        placeholder={body}
                        id="body"
                        type="text"
                        onChange={this.onChange}
                        name="body"
                        value={bodyVal}>
                        {/* <label htmlFor="body">Body</label> */}
                        {/* <input
                            placeholder={body}
                            id="body"
                            type="text"
                            onChange={this.onChange}
                            name="body"
                            value={bodyVal} /> */}
                    </Form.TextArea>
                    {!!this.props.image_url ? <Image alt="bloo" size='large' src={this.props.image_url} /> : null }
                    <ImageInput handleImageSuccess={this.handleImageSuccess} handleImageFailure={this.handleImageFailure} />
                    {!!this.props.file_url ? <p>File: {this.props.file_url}</p> : null}

                    <FileInput  handleFileSuccess={this.handleFileSuccess} handleFileFailure={this.handleFileFailure} />

                    <Button type='submit'>Submit</Button>
                </Form>
            </>
        )
    }
}