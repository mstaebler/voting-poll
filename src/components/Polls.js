import React, { Component } from 'react'
import Poll from './Poll'

class Polls extends Component {
    constructor(){
        super()
        this.state = {
            polls: [
                {name:"Poll 1", question:"Which is better apples or pears", optionArray:["apples","pears"]},
                {name:"Poll 2", questoin:"Which is better dogs or cats", optionArray:["dogs", "cats"]}
            ]
        }
    }
    render(){

        const pollItems = this.state.polls.map((poll, i)  => {
            return(
                <Poll key={poll.name} name={poll.name} question={poll.question} optionArray={poll.optionArray} />
            )
        })

        return(
            <div>
                <ul>
                    {pollItems}
                </ul>
            </div>
        )
    }
}

export default Polls