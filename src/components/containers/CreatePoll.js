import React, { Component } from 'react'
import Option from '../presentation/Option'
import styles from './styles'
import Axios from 'axios'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

class CreatePoll extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            question: '',
            options: ['',''],
            polls: []
        }
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

    validate({title, question, options}){
        if(title.length > 0 && question.length > 0 && options[0] !== '' && options[1] !== ''){
            return true
        }
        return false
    }

    createPoll(event){
        var polls = this.state.polls;
        var newPoll = {title: this.state.title, question: this.state.question, options: this.state.options}
        if(this.validate(newPoll)){
            polls.push(newPoll)
            this.setState({
                    title: '',
                    question: '',
                options: ['',''],
                polls: polls
            })
            this.uploadPoll(newPoll)
        }
        else{
            console.log('invalid poll')
        }
        
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
        const optionItems = this.state.options.map((option, i) => {
            return(
                <Option key={i} id={i.toString()} onChange={this.updateOption.bind(this)} value= {this.state.options[i]} />
            )
        })
        const style = styles.poll
        return(
            <div>
                <ul>         
                    <div style={style.container}>
                        <li style={style.list}>
                            <h3 style={style.header}>Create Poll</h3>
                            <FormGroup>
                                <FormControl id="title" onChange={this.updateField.bind(this)} type="text" placeholder="Poll Title" value= {this.state.title} />
                                <FormControl id="question" onChange={this.updateField.bind(this)} type="text" placeholder="Poll Question" value= {this.state.question} />
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

export default CreatePoll