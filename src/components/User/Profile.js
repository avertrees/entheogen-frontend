import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default class Profile extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={this.props.user.image_url} fluid alt={this.props.user.bio} />

                        {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h2'>{this.props.user.username}</Header>
                       

                        <p>
                            Bio: {this.props.user.bio}
                        </p>
                        <p>
                            Name: {!!this.props.user.name? this.props.user.name : `${this.props.user.username} does not have a name yet`}
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        )
    }
}