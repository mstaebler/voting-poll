import React, { Component } from 'react'
import { FormGroup, Radio } from 'react-bootstrap'

class Choice extends Component {
    render(){
        return(   
            <Radio name="choice" inline>
                {this.props.option}
            </Radio>
        )
    }
}

export default Choice