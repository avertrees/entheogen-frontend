import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../P5Wrapper/sketch3';
import { Link } from 'react-router-dom'
export default class ViewPost extends Component {
    
    state = {
        slider: 5,
        frameRate: null,
        data: {},
        index: 0,
        height:400,
        width:400
        // render:false
    }
    

    componentDidMount(){
        // const height = this.divElement.clientHeight;
        // localStorage.removeItem("canvasWidth")

        console.log("props in view Post", this.props)
        const width = this.divElement.clientWidth;
        // console.log(width)
        // localStorage.canvasWidth = width
        // localStorage.canvasHeight = ght
        this.setState({
            render: this.props.renderViz,
            sketch: sketch
        })
        console.log(sketch)
        
        // fetch(`https://entheogen-backend.herokuapp.com/data/${this.props.postObj.id}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": 'application/json',
        //         'Authorization': 'Bearer ' + localStorage.token
        //     }
        // })
        // .then(res => res.json())
        // .then(res => this.setState({
        //     ...this.state,
        //     data: res.data,
        //     render:true
        //     }, () => localStorage.setItem('myData', JSON.stringify(this.state.data)))
        // )
    }

    // handleClick= () => {
    //     this.state.render = true
    // }

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

    render() {
        // console.log(localStorage)
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        
                            <Header as='h2'>
                            {this.props.postObj.title}

                            {this.props.renderViz ? <Link className="ui button small right floated" to="/post/viz"> View Viz </Link> : <Link className="ui disabled button small right floated" to="/post/viz"> View Viz </Link>}
                            <Link className="ui button small right floated" to="/post/edit"> Edit </Link>
                            </Header>
                            <Image src={this.props.postObj.image_url} fluid />
                            <p>
                                {this.props.postObj.body}
                            </p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <div ref={(divElement) => this.divElement = divElement}>
                            {/* {this.props.renderViz ? <P5Wrapper sketch={this.state.sketch} data={this.props.data}/> : null} */}
                            {/* {this.state.render? <P5Wrapper p5Props={{ data: this.state.data, render: this.state.render }} onSetAppState={this.onSetAppState}> </P5Wrapper> : null} */}
                        </div>
                    </Grid.Column>
                </Grid.Row>

                
            </Grid>
        )
    }
}