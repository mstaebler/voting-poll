import React, { Component } from 'react'
import DisplayPolls from '../presentation/DisplayPolls'
import styles from './styles'
import Axios from 'axios'

class Polls extends Component {
    constructor(){
        super()
        this.state = {
            polls: []
        }
    }

    componentDidMount(){
        Axios
        .get('/api/polls')
        .then((res) => {
            this.setState({
                polls: res.data
            })
        })
        .catch((err) => console.log(err))
    }

    render(){
        const style = styles.poll
        return(
            <div>
                <ul>
                    <DisplayPolls polls={this.state.polls} username={this.state.username} />          
                </ul>
            </div>
        )
    }
}

export default Polls