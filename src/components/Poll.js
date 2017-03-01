import React, { Component } from 'react'
import Option from './Option'
import styles from './styles'

class Poll extends Component {
    render(){      
        const options = this.props.optionArray.map((option) => {
            return(
                <Option key={option.toString()} option={option} />
            )
        }) 
        return(
            <div style={styles.container}>
                <li style={styles.list}>
                    <h3 style={styles.header}>{this.props.name}</h3>
                    <p>{this.props.question}</p>
                    <ol>
                        {options}
                    </ol>
                </li>
            </div>
        )
    }
}

export default Poll