import React, { Component } from 'react'
// import { Button } from 'semantic-ui-react'
import ProfileForm from './ProfileForm'
import { withRouter } from 'react-router-dom'
class EditProfile extends Component {
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
            .then(res => this.props.history.push(`/profile`))
    }

    render() {
        return (
            <>   
                
                <ProfileForm handleSubmit={this.handleSubmit} user={this.props.user}/>
            </>
        )
    }
}
export default withRouter(EditProfile)