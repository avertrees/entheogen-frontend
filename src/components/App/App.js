import React, { Component } from 'react'

import P5Wrapper from '../P5Wrapper/index.js'

export default class App extends Component {
  
  state = {
    slider: 5,
    frameRate: null,
    data: {}, 
    index: 0,
    render: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(res => this.setState({
      ...this.state,
      data: res,
      render:true
    }, () => localStorage.setItem('myData', JSON.stringify(this.state.data))))
   
  }

  onSetAppState = (newState, cb) => this.setState(newState, cb)

  onSliderChange = (event) => this.setState({ slider: +event.target.value })

  render() {
    console.log(this.state.render)
    console.log(this.state.data)
    return (
      <>
      {/* <P5Wrapper p5Props={{ slider: this.state.slider, data: this.state.data}} onSetAppState={this.onSetAppState}> </P5Wrapper>   */}
        {this.state.render ? <P5Wrapper p5Props={{ slider: this.state.slider, data: this.state.data, render: this.state.render}} onSetAppState={this.onSetAppState}> </P5Wrapper> : null}

        <div style={{ textAlign: 'center' }}>
          <strong>{this.state.slider}</strong>
          <br />
          <input
            type="range"
            min={5} max={290} step={1}
            value={this.state.slider}
            style={{ width: '90%', maxWidth: '900px' }}
            onChange={this.onSliderChange}
          />
        </div>
      </>
    )
  }
}

