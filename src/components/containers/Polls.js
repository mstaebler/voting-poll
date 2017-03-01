import React, { Component } from 'react'
import Poll from '../presentation/Poll'
import Option from '../presentation/Option'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

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

    addOption(){
        console.log("add option")
    }

    createPoll(){
        console.log("create poll")
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
                <FormGroup>
                    <FormControl type="text" placeholder="Poll Title" />
                    <FormControl type="text" placeholder="Poll Question" />
                    <ul>
                        <Option />
                        <Option />
                    </ul>
                    {' '}
                    <Button onClick={this.addOption.bind(this)} type="submit">Add Option</Button>
                    <Button onClick={this.createPoll.bind(this)} type="submit">Create Poll</Button>
                </FormGroup>
            </div>
        )
    }
}

export default Polls