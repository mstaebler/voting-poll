import React, { Component } from 'react'
import DeleteButton from '../presentation/DeleteButton'
import styles from './styles'
import Axios from 'axios'

class DeletePoll extends Component{
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
        .get('/api/polls')
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
                <ul>
                    <DeleteButton click={this.deletePoll.bind(this)} polls={this.state.polls} />          
                </ul>
            </div>
        )
    }
}

export default DeletePoll