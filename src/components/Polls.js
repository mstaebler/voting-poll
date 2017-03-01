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
        return(
            <div>
                <ul>
                    <Poll name={this.state.polls[0].name} question={this.state.polls[0].question} optionArray={this.state.polls[0].optionArray} />
                    <Poll name={this.state.polls[1].name} question={this.state.polls[1].question} optionArray={this.state.polls[1].optionArray} />
                </ul>
            </div>
        )
    }
}

export default Polls