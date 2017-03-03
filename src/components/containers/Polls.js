import React, { Component } from 'react'
import Option from '../presentation/Option'
import DisplayPolls from '../presentation/DisplayPolls'
import styles from './styles'
import Axios from 'axios'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

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
                    <DisplayPolls polls={this.state.polls} />          
                </ul>
            </div>
        )
    }
}

export default Polls