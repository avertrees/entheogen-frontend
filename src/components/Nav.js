import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

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
                    name='features'
                    active={activeItem === 'features'}
                    onClick={this.handleItemClick}
                >
                    Features
        </Menu.Item>

                <Menu.Item
                    name='testimonials'
                    active={activeItem === 'testimonials'}
                    onClick={this.handleItemClick}
                >
                    Testimonials
        </Menu.Item>

                <Menu.Item
                    name='sign-in'
                    active={activeItem === 'sign-in'}
                    onClick={this.handleItemClick}
                >
                    Sign-in
        </Menu.Item>
            </Menu>
        )
    }
}