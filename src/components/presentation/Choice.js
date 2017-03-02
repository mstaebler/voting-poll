import React, { Component } from 'react'
import { FormGroup, Radio } from 'react-bootstrap'

class Choice extends Component {
    render(){
        return(
            <div>
                <FormGroup>
                    <Radio inline>
                        {this.props.option}
                    </Radio>
                </FormGroup>
            </div>
        )
    }
}

export default Choice