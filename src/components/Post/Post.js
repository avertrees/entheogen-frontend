import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class Post extends Component {
    render() {
        return (
            
            <Card onClick={() => this.props.handleClick(this.props.postObj.id)}>
                 <Image src={this.props.postObj.image_url} wrapped ui={false} /> 
            <Card.Content>
                    <Card.Header> <Link to="/post">{this.props.postObj.title} </Link> </Card.Header>  
                    <Card.Meta> Written by: {localStorage.name} </Card.Meta>
                <Card.Description>
                        {this.props.postObj.description}
                </Card.Description>
            </Card.Content>
        </Card>
            
        )
    }
}