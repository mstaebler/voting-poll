import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button, Panel } from 'react-bootstrap'

class DeleteButton extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            let answers = []
            Object.keys(poll.answers).map((key, i ) => {
                answers.push(`${key}: ${poll.answers[key]}  `)
            })
            return(
                <Panel key={i}>
                    <Button  id={poll._id} style={{marginRight:50}} onClick={this.props.click}>Delete</Button>
                    {poll.title}
                    <span style={{float:'right'}}>{answers}</span>
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