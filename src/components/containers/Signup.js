import React, { Component } from 'react'
import Option from '../presentation/Option'
import styles from './styles'
import Axios from 'axios'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    validate({title, question, options}){
        if(title.length > 0 && question.length > 0 && options[0] !== '' && options[1] !== ''){
            return true
        }
        return false
    }

    createAccount(event){
        var polls = this.state.polls;
        var newPoll = {title: this.state.title, question: this.state.question, options: this.state.options}
        if(this.validate(newPoll)){
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
        else{
            console.log('invalid poll')
        }
        
    }

    updateField(event){
        this.setState({[event.target.id]: event.target.value})  
    }

    render(){
        const style = styles.poll
        return(
            <div style={style.container}>
                <li style={style.list}>
                    <h3 style={style.header}>Create Account</h3>
                    <FormGroup>
                        <FormControl id="email" onChange={this.updateField.bind(this)} type="text" placeholder="Email" />
                        <FormControl id="password" onChange={this.updateField.bind(this)} type="text" placeholder="Password" />
                        {' '}
                        <Button onClick={this.createAccount.bind(this)} type="submit">Create Account</Button>
                    </FormGroup>
                </li>
            </div>
        )
    }
}

export default Signup