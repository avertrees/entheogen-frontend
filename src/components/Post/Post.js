import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Post extends Component {
    render() {
        return (
        <Card>
                <Image src={this.props.postObj.image_url} wrapped ui={false} />
            <Card.Content>
                    <Card.Header>{this.props.postObj.title}</Card.Header>
                <Card.Meta>Written by {this.props.author} </Card.Meta>
                <Card.Description>
                        {this.props.postObj.description}
                </Card.Description>
            </Card.Content>
        </Card>
        )
    }
}