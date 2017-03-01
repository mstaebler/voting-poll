import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class Option extends Component {
    render(){
        return(
            <div>
                <li>
                    <FormControl type="text" placeholder="Option" id={this.props.id} />
                </li>
            </div>
        )
    }
}

export default Option