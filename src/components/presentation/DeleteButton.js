import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button, Panel } from 'react-bootstrap'

class DeleteButton extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            return(
                <Panel key={i}>
                    <button id={poll._id} style={{marginRight:50}} onClick={this.props.click}>Delete</button>
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

export default DeleteButton