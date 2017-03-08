import React, { Component } from 'react'
import styles from './styles'
import { FormGroup, FormControl, Button, Panel } from 'react-bootstrap'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

class DeleteButton extends Component{
    render(){
        const pollItems = this.props.polls.map((poll, i)  => {
            let answers = []
            Object.keys(poll.answers).map((key, i ) => {
                answers.push({name: key, value: poll.answers[key]})
            })
            return(
                <Panel key={i}>
                    Title: {poll.title}
                    <br />
                    <span>Question: {poll.question}</span>
                    <Button  style={{float:'right'}} id={poll._id} onClick={this.props.click}>Delete</Button>   
                    <ResponsiveContainer width="100%" aspect={4}>
                    <BarChart data={answers} width={500} height={200} >
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>  
                    </ResponsiveContainer>
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