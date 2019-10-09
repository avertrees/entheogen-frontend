import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import sketch1 from './sketch1'
// import sketch2 from './sketch2'
import sketch3 from './sketch3'

export default class P5Wrapper extends Component {
    static propTypes = {
        p5Props: PropTypes.object.isRequired,
        onSetAppState: PropTypes.func.isRequired,
    }
    

    componentDidMount() {
        // this.canvas1 = new window.p5(sketch1, 'canvas1-container')
        // this.canvas1.props = this.props.p5Props
        // this.canvas1.onSetAppState = this.props.onSetAppState

        // this.canvas2 = new window.p5(sketch2, 'canvas2-container')
        // this.canvas2.props = this.props.p5Props
        console.log("props in P5Wrapper", this.props.p5Props)
        this.canvas3 = new window.p5(sketch3, 'canvas3-container')
        this.canvas3.props = this.props.p5Props
        
    }

    shouldComponentUpdate(nextProps) {
        // this.canvas1.props = nextProps.p5Props
        // this.canvas2.props = nextProps.p5Props
        console.log("props in P5Wrapper", this.props.p5Props)
        this.canvas3.props = nextProps.p5Props
        // console.log(this.canvas3.props)
        // console.log(this.canvas3.props.data.alpha.length)
        return false

    }

    componentWillUnmount() {
        // this.canvas1.remove()
        // this.canvas2.remove()
        this.canvas3.remove()
    }

    render() {
        
        return (
            <>
                <div
                    id="canvas3-container"
                    style={{ width: "100%", height: "100%", textAlign: "center" }}
                />

                {/* <div
                    id="canvas2-container"
                    style={{ width: "100%", textAlign: "center" }}
                />
                <div
                    id="canvas1-container"
                    style={{ width: "100%", textAlign: "center" }}
                /> */}
            </>
        )
    }
}