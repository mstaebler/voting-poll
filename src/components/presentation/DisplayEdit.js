import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button, Panel } from 'react-bootstrap'

class DisplayEdit extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            return(
                <Panel key={i}>
                    <button style={{marginRight:50}}>Edit</button>
                    {poll.title}
                </Panel>
            )
        })
        const style = styles.poll
        return(
            <div>
                {pollItems}
            </div>
        )
    }
}

export default DisplayEdit