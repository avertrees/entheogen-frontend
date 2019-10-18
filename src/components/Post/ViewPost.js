import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import P5Wrapper from '../P5Wrapper/index.js'
export default class ViewPost extends Component {
    state = {
        slider: 5,
        frameRate: null,
        data: {},
        index: 0,
        height:400,
        width:400,
        render:true
    }
    componentDidMount(){
        // const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;
        // localStorage.canvasHeight = ght
        localStorage.canvasWidth = width
        fetch(`http://localhost:3000/data/${this.props.postObj.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
        .then(res => res.json())
        .then(res => this.setState({
            ...this.state,
            data: res,
            render:true
            }, () => localStorage.setItem('myData', JSON.stringify(this.state.data)))
        )
    }
    onSetAppState = (newState, cb) => { 
        this.setState(newState, cb)
    }

  onSliderChange = (event) => {
    this.setState({ slider: +event.target.value })
  }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <div ref={(divElement) => this.divElement = divElement}>
                            <P5Wrapper p5Props={{ slider: this.state.slider, data: this.state.data, render: this.state.render }} onSetAppState={this.onSetAppState}> </P5Wrapper> 
                        </div>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        
                            <Header as='h2'>{this.props.postObj.title}</Header>
                            <Image src={this.props.postObj.image_url} fluid />
                            <p>
                                {this.props.postObj.body}
                            </p>
                       
                    </Grid.Column>
                </Grid.Row>

                
            </Grid>
        )
    }
}