import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import Poll from '../presentation/Poll'

class DisplayPolls extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            return(
                <Poll key={poll.title} username={poll.username} title={poll.title} question={poll.question} options={poll.options} />
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

export default DisplayPolls