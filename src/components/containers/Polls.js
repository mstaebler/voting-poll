import React, { Component } from 'react'
import Poll from '../presentation/Poll'
import Option from '../presentation/Option'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import styles from './styles'

class Polls extends Component {
    constructor(){
        super()
        this.state = {
            title: {
                title: ''
            },
            question: {
                question: ''
            },
            options: [],
            polls: [
                {name:"Poll 1", question:"Which is better apples or pears", options:["apples","pears"]},
                {name:"Poll 2", questoin:"Which is better dogs or cats", options:["dogs", "cats"]}
            ]
        }
    }

    addOption(event){
        console.log("add option")
    }

    createPoll(event){
        console.log("create poll")
        var polls = this.state.polls;
        polls.push({title: this.state.title, question: this.state.question, options: this.state.options})
        this.setState({
            title: {
                title: ''
            },
            question: {
                question: ''
            },
            options: [],
            polls: polls
        }, () => {
            console.log(this.state)
        })
    }

    updateField(event){
        this.setState({[event.target.id]: event.target.value})  
    }

    updateOption(event){
        let currentOptions = this.state.options
        currentOptions[Number(event.target.id)] = event.target.value
        let update = {
            options: currentOptions
        }
        this.setState(update, () => {
            console.log('state is now', this.state)
        })
    }

    render(){

        const pollItems = this.state.polls.map((poll, i)  => {
            return(
                <Poll key={poll.name} name={poll.name} question={poll.question} options={poll.options} />
            )
        })
        const style = styles.poll
        return(
            <div>
                <ul>
                    {pollItems}           
                    <div style={style.container}>
                    <li style={style.list}>
                        <h3 style={style.header}>Create Poll</h3>
                        <FormGroup>
                            <FormControl id="title" onChange={this.updateField.bind(this)} type="text" placeholder="Poll Title" />
                            <FormControl id="question" onChange={this.updateField.bind(this)} type="text" placeholder="Poll Question" />
                            <ul>
                                <Option id="0" onChange={this.updateOption.bind(this)} />
                                <Option id="1" onChange={this.updateOption.bind(this)} />
                            </ul>
                            {' '}
                            <Button onClick={this.addOption.bind(this)} type="submit">Add Option</Button>
                            <Button onClick={this.createPoll.bind(this)} type="submit">Create Poll</Button>
                        </FormGroup>
                    </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Polls