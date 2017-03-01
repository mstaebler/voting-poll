import React, { Component } from 'react'
import Option from './Option'

class Poll extends Component {
    render(){       
        return(
            <div>
                <li>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.question}</p>
                    <ol>
                        {this.props.optionArray}
                    </ol>
                </li>
            </div>
        )
    }
}

export default Poll