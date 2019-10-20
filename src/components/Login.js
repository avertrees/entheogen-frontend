import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class Login extends Component {
    state = {
        logIn: true,
        username: "",
        password: "",
        errors: []
    }
    
    logInSubmit = event => {
        event.preventDefault()
        // console.log("login", this.state)
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        }).then(res => res.json())
            .then(data => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    })
                } else {
                    // console.log(data)
                    this.props.logInUser(data.jwt, data.user.id, data.user.username, data.user.name, data.user.image_url)
                }
            })
    }

    signUpSubmit = event => {
        event.preventDefault()
        // console.log("submit", this.state)
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 "Accept": 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    name: "firstname lastname",
                    bio: "lorem ipsum",
                    image_url: "https://thehappypuppysite.com/wp-content/uploads/2018/05/Pembroke-Welsh-Corgi-HP-long.jpg"
                }
            })
        }).then(res => res.json())
            .then(data => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    })
                } else {
                    // console.log(data)
                    this.props.logInUser(data.jwt, data.user.id, data.user.username, data.user.name, data.user.image_url)
                }
            })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state))
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
                                    placeholder='username' 
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
                        <Form onSubmit={this.signUpSubmit}>
                            <Form.Field>
                                <label htmlFor="sign_up_username">Username</label>
                                <input 
                                    placeholder="username"
                                    id="sign_up_username"
                                    type="text"
                                    onChange={this.onChange}
                                    name="username"
                                    value={this.state.username} />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor="sign_up_password">Password</label>
                                <input
                                    placeholder='password'
                                    id="sign_up_password"
                                    type="password"
                                    onChange={this.onChange}
                                    name="password"
                                    value={this.state.password} />
                            </Form.Field>
                            
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </section>
            }
        </>
    }

}