import React, { Component } from 'react'
import { FormGroup, Radio } from 'react-bootstrap'

class Choice extends Component {
    render(){
        return(   
            <Radio name="choice" onChange={this.props.onChange} value={this.props.value} inline>
                {this.props.option}
            </Radio>
        )
    }
}

export default Choice