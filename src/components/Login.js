import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Login extends Component {
    state = {
        logIn: false,
        username: "",
        password: "",
        errors: []
    }
    logInSubmit = event => {
        event.preventDefault()
        fetch("http://localhost:3000/tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    })
                } else {
                    this.props.logInUser(data.token, data.user_id)
                }
            })
    }

    signUpSubmit = event => {
        event.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    })
                } else {
                    this.props.logInUser(data.token, data.user_id)
                }
            })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return <>
            <ul>
                {
                    this.state.errors.map(error => <li>{error}</li>)
                }
            </ul>
            {
                this.state.logIn
                    ?
                    <section>
                        <h2>Log In</h2>
                        <Button onClick={() => this.setState({ logIn: false })}>I need to register!!!</Button>
                        <Form onSubmit={this.logInSubmit}>
                            <Form.Field>
                                <label htmlFor="log_in_username">Username</label>
                                <input 
                                    placeholder='Email' 
                                    id="log_in_username"
                                    type="text"
                                    onChange={this.onChange /* for controlled form input status */}
                                    name="username"
                                    value={this.state.username /* for controlled form input status */} />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="log_in_password">Password</label>
                                <input 
                                    placeholder='password'
                                    id="log_in_password"
                                    type="password"
                                    onChange={this.onChange}
                                    name="password"
                                    value={this.state.password} />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </section>
                    :
                    <section>
                        <h2>Sign up</h2>
                        <Button onClick={() => this.setState({ logIn: true })}>I already signed up!!!</Button>
                        <Form onSubmit={this.logInSubmit}>
                            <Form.Field>
                                <label htmlFor="sign_up_username">Username</label>
                                <input 
                                    placeholder="email"
                                    id="sign_up_username"
                                    type="text"
                                    onChange={this.onChange}
                                    name="username"
                                    value={this.state.username} />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="log_in_password">Password</label>
                                <input
                                    placeholder='password'
                                    id="log_in_password"
                                    type="password"
                                    onChange={this.onChange}
                                    name="password"
                                    value={this.state.password} />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </section>
            }
        </>
    }

}