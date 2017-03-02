import React, { Component } from 'react'
import Poll from '../presentation/Poll'
import Option from '../presentation/Option'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import styles from './styles'
import Axios from 'axios'

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
            options: ['',''],
            polls: []
        }
    }

    componentDidMount(){
        Axios
        .get('/api/polls')
        .then((res) => {
            console.log(JSON.stringify(res.data))
            this.setState({
                polls: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    addOption(event){
        let options = this.state.options;
        options.push('')
        this.setState({options})
    }

    uploadPoll(poll){
        Axios
        .post('/api/polls', poll)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    createPoll(event){
        var polls = this.state.polls;
        var newPoll = {title: this.state.title, question: this.state.question, options: this.state.options}
        polls.push(newPoll)
        this.setState({
            title: {
                title: ''
            },
            question: {
                question: ''
            },
            options: ['',''],
            polls: polls
        })
        this.uploadPoll(newPoll)
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
        this.setState(update)
    }

    render(){

        const pollItems = this.state.polls.map((poll, i)  => {
            return(
                <Poll key={poll.title} title={poll.title} question={poll.question} options={poll.options} />
            )
        })
        const optionItems = this.state.options.map((option, i) => {
            return(
                <Option key={i} id={i.toString()} onChange={this.updateOption.bind(this)} />
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
                                {optionItems}
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