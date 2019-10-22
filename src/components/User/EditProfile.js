import React, { Component } from 'react'
// import { Button } from 'semantic-ui-react'
import ProfileForm from './ProfileForm'
export default class EditProfile extends Component {
    handleSubmit = (data) => {
        console.log(data)
        fetch(`https://entheogen-backend.herokuapp.com/users/${localStorage.userId}`,
            {
                method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.token
                },
                body: JSON.stringify({
                    name: data.name,
                    bio:data.bio,
                    image_url: data.image_url
                })
            })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render() {
        return (
            <>   
                <h1>Edit Profile</h1>
                <ProfileForm handleSubmit={this.handleSubmit} user={this.props.user}/>
            </>
        )
    }
}