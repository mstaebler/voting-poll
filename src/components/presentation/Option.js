import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

class Option extends Component {
    render(){
        return(
            <div>
                <li style={{listStyleType: 'none'}} >
                    <FormControl type="text" placeholder="Option" onChange={this.props.onChange} id={this.props.id} value= {this.props.value} />
                </li>
            </div>
        )
    }
}

export default Option