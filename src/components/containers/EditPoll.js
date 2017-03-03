import React, { Component } from 'react'
import DisplayEdit from '../presentation/DisplayEdit'
import styles from './styles'
import Axios from 'axios'

class EditPoll extends Component{
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
                    <DisplayEdit polls={this.state.polls} />          
                </ul>
            </div>
        )
    }
}

export default EditPoll