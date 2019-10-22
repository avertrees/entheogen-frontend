import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sketch3 from './sketch3'
import { Loader } from 'semantic-ui-react'

export default class P5Wrapper extends Component {

    static propTypes = {
        p5Props: PropTypes.object.isRequired,
        onSetAppState: PropTypes.func.isRequired,
    }
    

    componentDidMount() {
        console.log("this is", this)
        this.canvas3 = new window.p5(sketch3, 'canvas3-container')
        // console.log("now this is", this)
        this.canvas3.props = this.props.p5Props
        console.log("now this is", this)
        console.log("canvas is", this.canvas3)
    }

    shouldComponentUpdate(nextProps) {
        this.canvas3.props = nextProps.p5Props
        console.log("canvas on update is", this.canvas3)
        return false
    }

    componentWillUnmount() {
        console.log("canvas on remove is", this.canvas3)
        this.canvas3.remove()
        // localStorage.myData.remove()
    }

    render() {
        
        return (
            <>
                <div
                    id="canvas3-container"
                    style={{ width: "100%", height: "100%", textAlign: "center" }}
                    
                />
            </>
        )
    }
}