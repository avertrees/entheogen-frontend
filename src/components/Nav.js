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
                    <img className="ui avatar image" src={this.props.image_url} alt="avitar" />
                    {/* <Image src={this.props.image_url} alt="profile picture" avitar> </Image> */}
                </Menu.Item>

                
                    <Menu.Item
                        as={Link} 
                        to="/posts"
                        name='my_posts'
                        active={activeItem === 'My Posts'}
                        onClick={this.handleItemClick}
                        // position='left'
                    >
                    My Posts
                    {/* <Link to="/">  My Posts</Link> */}
                    </Menu.Item>                
                

                
                <Menu.Item
                    as={Link}
                    to="/posts/new"
                    name='new_post'
                    active={activeItem === 'New Post'}
                    onClick={this.handleItemClick}
                    // position='left'
                >
                    New Post
                    {/* <Link to="/new"> New Post</Link> */}
                </Menu.Item>
                

                <Menu.Item
                    as={Link}
                    to="/profile"
                    name='profile'
                    active={activeItem === 'profile'}
                    // onClick={() => this.props.showProfile()}
                   
                >
                    {localStorage.username}
                </Menu.Item>                

                <Menu.Item
                    as={Link}
                    to="/logout"
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={() => this.props.logOutUser()}
                    position='right'
                >
                    Log Out
                    {/* <Link to="/logout">Log Out</Link> */}
                </Menu.Item>
            </Menu>
        )
    }
}