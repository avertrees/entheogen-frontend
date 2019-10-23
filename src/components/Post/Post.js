import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class Post extends Component {

    render() {
        return (
            
            // <Card onClick={() => this.props.handleClick(this.props.postObj.id)}>
            <Card>
                 <Image src={this.props.postObj.image_url} wrapped ui={false} /> 
            <Card.Content>
                    {/* <Card.Header>  */}
                    <Link className="header" to={`/post/${this.props.postObj.id}`}> {this.props.postObj.title} </Link> 
                    {/* </Card.Header>   */}
                    <Card.Meta> <Link className="header" to={`/post/${this.props.postObj.id}`}> Written by: {localStorage.name} </Link> </Card.Meta>
                <Card.Description>
                        {this.props.postObj.description}
                </Card.Description>
            </Card.Content>
        </Card>
            
        )
    }
}