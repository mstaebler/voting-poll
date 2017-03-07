import React, { Component } from 'react'
import Option from './Option'
import styles from './styles'
import Choice from './Choice'
import { FormGroup } from 'react-bootstrap'
import Axios from 'axios'

class Poll extends Component {
    constructor(){
        super()
        this.state = {
            voted: false
        }
    }

    updatePoll(poll) {
        Axios
        .put('/api/polls', poll)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    componentDidMount(){
        this.setState({
            answers: this.props.answers
        })
    }
    onChange(event) {
        if(!this.state.voted){
            if(this.state.answers[event.target.value]){
                var newAnswers = Object.assign({},this.state.answers)
                newAnswers[event.target.value] += 1
                this.setState({
                    voted: true,
                    answers: newAnswers
                },function(){
                    var poll = {
                        _id: this.props._id,
                        title: this.props.title,
                        question: this.props.question,
                        options: this.props.options,
                        answers: this.state.answers
                    }
                    this.updatePoll(poll)
                })
            } else {
                var newAnswers = Object.assign({},this.state.answers)
                newAnswers[event.target.value] = 1
                this.setState({
                    voted: true,
                    answers: newAnswers
                }, function(){
                    var poll = {
                        _id: this.props._id,
                        title: this.props.title,
                        question: this.props.question,
                        options: this.props.options,
                        username: localStorage.username,
                        answers: this.state.answers
                    }
                    this.updatePoll(poll)
                })
            }
            
        }       
    }

    render(){      
        const options = this.props.options.map((option, i) => {
            return(
                <Choice onChange={this.onChange.bind(this)} key={option.toString()} value={option} option={option} />
            )
        }) 
        const style = styles.poll
        return(
            <div style={style.container}>
                <li style={style.list}>
                    <h3 style={style.header}>{this.props.title}</h3>
                    <p>{this.props.question}</p>
                    <p>By {this.props.username}</p>
                    <FormGroup>
                        {options}
                    </FormGroup>
                </li>
            </div>
        )
    }
}

export default Poll