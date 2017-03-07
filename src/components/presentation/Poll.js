import React, { Component } from 'react'
import Option from './Option'
import styles from './styles'
import Choice from './Choice'
import { FormGroup } from 'react-bootstrap'

class Poll extends Component {
    render(){      
        const options = this.props.options.map((option) => {
            return(
                <Choice key={option.toString()} option={option} />
            )
        }) 
        const style = styles.poll
        return(
            <div style={style.container}>
                <li style={style.list}>
                    <h3 style={style.header}>{this.props.title}</h3>
                    <p>{this.props.question}</p>
                    <p>By {this.props.username}</p>
                    <FormGroup>
                        {options}
                    </FormGroup>
                </li>
            </div>
        )
    }
}

export default Poll