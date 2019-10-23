import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import sketch from '../P5Wrapper/sketch3';

export default class Viz extends Component {
    state = {
        renderAlpha: false,
        renderBeta: false,
        renderGamma: false,
        renderDelta: false,
        renderTheta: false
    }
    
    componentDidMount() {
        const width = this.divElement.clientWidth;
        console.log("props in view Post", this.props)
        localStorage.canvasWidth = width
    }

    handleAll = () => { 
        this.setState({
            renderAlpha: true,
            renderBeta: true,
            renderGamma: true,
            renderDelta: true,
            renderTheta: true   
        })
    }

    handleGamma = () => this.setState({ renderGamma: !this.state.renderGamma })

    handleAlpha = () => this.setState({ renderAlpha: !this.state.renderAlpha })

    handleBeta = () => this.setState({ renderBeta: !this.state.renderBeta })

    handleDelta = () => this.setState({ renderDelta: !this.state.renderDelta})

    handleTheta = () => this.setState({ renderTheta: !this.state.renderTheta })
    
    render() {
        return (
            <div ref={(divElement) => this.divElement = divElement}>
                <Button.Group widths='6' floated="right" compact >
                    <Button id="gamma" onClick={this.handleGamma} color='red'>Gamma</Button>
                    <Button id="beta" onClick={this.handleBeta} color='yellow' >Beta</Button>
                    <Button id="alpha" onClick={this.handleAlpha} color='green'>Alpha</Button>
                    
                    <Button id="theta" onClick={this.handleTheta} color='blue'>Theta</Button>
                    <Button id="delta" onClick={this.handleDelta} color='purple'>Delta</Button>
                    
                    <Button id="all" onClick={this.handleAll} >All</Button>
                </Button.Group>
                {/* {this.props.renderViz ? <P5Wrapper sketch={this.state.sketch} data={this.props.data}/> : null} */}
                <P5Wrapper sketch={sketch} data={this.props.data} render={this.state} />
            </div>
        )
    }
}