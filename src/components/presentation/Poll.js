import React, { Component } from 'react'
import Option from './Option'
import styles from './styles'
import Choice from './Choice'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import Axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

class Poll extends Component {
    constructor(){
        super()
        this.state = {
            voted: false,
            option: ''
        }
    }

    updatePoll(poll) {
        Axios
        .put('/api/polls', poll)
        .then((res) => {
            let data = []
            Object.keys(this.state.answers).map((key, i ) => {
                data.push({name: key, value: this.state.answers[key]})
            })
            this.setState({
                voted: true,
                graphData: data
            })
        })
        .catch((err) => console.log(err))
    }
    componentWillMount(){
        this.setState({
            answers: this.props.answers,
            options: this.props.options
        },function(){
            let data = []
            Object.keys(this.state.answers).map((key, i ) => {
                data.push({name: key, value: this.state.answers[key]})
            })
            this.setState({
                graphData: data
            })
        })
    }
    onChange(event) {
        if(!this.state.voted){
            var newAnswers = Object.assign({},this.state.answers)
            this.state.answers[event.target.value] ? newAnswers[event.target.value] += 1 : newAnswers[event.target.value] = 1 
                this.setState({
                    answers: newAnswers
                },function(){
                    var poll = {
                        _id: this.props._id,
                        title: this.props.title,
                        question: this.props.question,
                        options: this.state.options,
                        username: this.props.username,
                        answers: this.state.answers
                    }
                    this.updatePoll(poll)
                })          
        }       
    }

    updateField(event){
        this.setState({[event.target.id]: event.target.value})  
    }

    addOption(event){
        var newOptions = this.state.options
        newOptions.push(this.state.option)
        this.setState({
            options: newOptions
        })
    }

    render(){      
        const options = this.state.options.map((option, i) => {
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
                        {localStorage.username &&
                        <span>
                            <FormControl style={{marginTop:20}} id="option" type="text" placeholder="new option" onChange={this.updateField.bind(this)} value= {this.state.title} />
                            <Button style={{marginTop:10}} onClick={this.addOption.bind(this)}>Add Option</Button>
                        </span>
                        }
                    </FormGroup>
                </li>
                {this.state.voted &&
                <ResponsiveContainer width="100%" aspect={4}>
                <BarChart data={this.state.graphData} width={600} height={200} >
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart> 
                </ResponsiveContainer>
                }
            </div>
        )
    }
}

export default Poll