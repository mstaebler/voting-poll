import React, { Component } from 'react'
import DeleteButton from '../presentation/DeleteButton'
import styles from './styles'
import Axios from 'axios'
import { Panel } from 'react-bootstrap'

class YourPolls extends Component{
    constructor(){
        super()
        this.state = {
            polls: []
        }
    }

    componentDidMount(){
        this.getPolls()
    }

    getPolls(){
        Axios
        .get(`/api/polls?username=${localStorage.username}`)
        .then((res) => {
            this.setState({
                polls: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    deletePoll(event){
        Axios
        .delete(`/api/polls/${event.target.id}`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
        this.getPolls()
    }

    render(){
        const style = styles.poll
        return(
            <div>
                <Panel>Share your polls with your friends!<p><a href={`/Polls?username=${localStorage.username}`}>link to your polls</a></p></Panel>
                
                <ul>
                    <DeleteButton click={this.deletePoll.bind(this)} polls={this.state.polls} />          
                </ul>
            </div>
        )
    }
}

export default YourPolls