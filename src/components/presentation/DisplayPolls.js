import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import Poll from '../presentation/Poll'

class DisplayPolls extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            return(
                <Poll _id={poll._id} key={poll._id} username={poll.username} title={poll.title} question={poll.question} options={poll.options} answers={poll.answers} />
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