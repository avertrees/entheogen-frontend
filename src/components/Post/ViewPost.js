import React, { Component } from 'react'
import { Grid, Image, Header, Container, Button } from 'semantic-ui-react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../P5Wrapper/sketch3';
import { Link } from 'react-router-dom'
import Viz from './Viz'
export default class ViewPost extends Component {
    
    state = {
        slider: 5,
        frameRate: null,
        data: {},
        index: 0,
        height:400,
        width:400,
        renderViz:false,
        render:false,
        post:{}
    }
    

    componentDidMount(){
        // const height = this.divElement.clientHeight;
        // localStorage.removeItem("canvasWidth")
        // const width = this.divElement.clientWidth;
        // console.log("props in view Post", this.props)
        // localStorage.canvasWidth = width
        // console.log(width)
        
        // localStorage.canvasHeight = ght
        // this.setState({
        //     render: false,
        // })
        // console.log(sketch)
        console.log(this.renderURL())
        let postId = this.renderURL()
        fetch(`https://entheogen-backend.herokuapp.com/posts/${postId}`, {
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
            post: res.post
            }, () => this.getData(postId))
        )
        // localStorage.setItem('myData', JSON.stringify(this.state.data))
    }

    renderURL = () => {
        let url = window.location.href
        let urlArray = url.split("/")
        return urlArray[urlArray.length - 1]
    }
    // handleClick= () => {
    //     this.state.render = true
    // }

    getData = (postId) => {
        fetch(`https://entheogen-backend.herokuapp.com/data/${postId}`, {
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
                data: res.data,
                renderViz: true
            }, () => console.log(this.state.data))

            )  
    }

    componentDidUpdate() {
        console.log("props in view Post", this.props)

    }
    onSetAppState = (newState, cb) => { 
        this.setState(newState, cb)
    }

    onSliderChange = (event) => {
        this.setState({ slider: +event.target.value })
    }

    // componentWillUnmount() {
    //     console.log("canvas on remove is", this.canvas3)
    //     this.canvas3.remove()
    // }

    show = () => {
        this.setState({
            render: !this.state.render
        })
    }
    render() {
        // console.log(localStorage)
        return (
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        
                            <Header as='h2'>
                            {this.state.post.title}
                            {this.state.renderViz ? <Button onClick={this.show} compact floated="right" to={`/post/${this.state.post.id}/viz`}> View Viz </Button> : <Button disabled loading compact floated="right" > View Viz </Button>}

                            {/* {this.props.renderViz ? <Link onClick={this.show} className="ui button small right floated" to="/post/viz"> View Viz </Link> : <Link className="ui disabled button small right floated" to="/post/viz"> View Viz </Link>} */}
                            <Link className="ui button compact right floated" to={`/post/${this.state.post.id}/edit`}> Edit </Link>
                            </Header>
                            <Image src={this.state.post.image_url} fluid />
                            
                        {this.state.post.body}
                            
                    </Grid.Column>
                    <Grid.Column width={8}> 
                        {/* <div ref={(divElement) => this.divElement = divElement}> */}
                            {/* {this.props.renderViz ? <P5Wrapper sketch={this.state.sketch} data={this.props.data}/> : null} */}
                            {/* {this.state.render ? <P5Wrapper sketch={this.state.sketch} data={this.props.data} /> : null} */}
                            {this.state.render ? <Viz data={this.state.data} /> : null}

                        {/* </div> */}
                     </Grid.Column>
                </Grid.Row>

                
            </Grid>
        )
    }
}