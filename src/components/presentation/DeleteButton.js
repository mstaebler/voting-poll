import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button, Panel } from 'react-bootstrap'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class DeleteButton extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            let answers = []
            Object.keys(poll.answers).map((key, i ) => {
                answers.push({name: key, value: poll.answers[key]})
            })
            return(
                <Panel key={i}>
                    <Button  id={poll._id} style={{marginRight:50}} onClick={this.props.click}>Delete</Button>
                    {poll.title}
                    <br />
                    <span style={{marginLeft:115}}>{poll.question}</span>
                    <BarChart style={{float:'right'}} data={answers} width={200} height={200} >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>  
                </Panel>
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

export default DeleteButton