import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
//    https://react.semantic-ui.com/addons/transitionable-portal/ 
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='https://react.semantic-ui.com/logo.png' alt="react-logo" />
                </Menu.Item>

                
                    <Menu.Item
                        as={Link} 
                        to="/"
                        name='my_posts'
                        active={activeItem === 'My Posts'}
                        onClick={this.handleItemClick}
                    >
                    My Posts
                    {/* <Link to="/">  My Posts</Link> */}
                    </Menu.Item>                
                

                
                <Menu.Item
                    as={Link}
                    to="/new"
                    name='new_post'
                    active={activeItem === 'New Post'}
                    onClick={this.handleItemClick}
                >
                    New Post
                    {/* <Link to="/new"> New Post</Link> */}
                </Menu.Item>
                

                
                <Menu.Item
                    as={Link}
                    to="/logout"
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={() => this.props.logOutUser()}
                >
                    Log Out
                    {/* <Link to="/logout">Log Out</Link> */}
                </Menu.Item>
                

            </Menu>
        )
    }
}