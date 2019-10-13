import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class CreatePostForm extends Component {
    state = {
        logIn: false,
        title: "",
        description:"",
        body:"",
        image_url:"",
        errors: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
    }

    render() {
        return (
            <>
                <Form onSubmit={this.logInSubmit}>
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
                    <Form.Field>
                        <label htmlFor="image_url">Image Url</label>
                        <input
                            placeholder='image_url'
                            id="image_url"
                            type="text"
                            onChange={this.onChange}
                            name="image_url"
                            value={this.state.image_url} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </>
        )
    }
}