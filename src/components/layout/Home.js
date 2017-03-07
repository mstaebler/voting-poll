import React, { Component } from 'react'
import Polls from '../containers/Polls'
import Navigation from './Navigation'
import { Jumbotron } from 'react-bootstrap'
import auth from '../../auth'

class Home extends Component {
    constructor(){
        super()
        this.updateAuth = this.updateAuth.bind(this)
        this.state = {
            loggedIn : auth.loggedIn() 
        }
    }

    updateAuth(bool) {
        this.setState({
            loggedIn: bool
        })
    }

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    }

    login(username, pass, cb) {
        auth.login(username, pass, cb)
    }

    logout() {
        auth.logout()
    }
    render(){
        return(
            <div className="container">
                <Navigation loggedIn={this.state.loggedIn} logout={this.logout.bind(this)} login={this.login.bind(this)}></Navigation>
                <Jumbotron>
                    <h1>VotePoll</h1>
                    <p>Create custom polls, vote and view results!</p>
                </Jumbotron>
                {this.props.children}   
                {/*<Polls />     */}
            </div>
            
        )
    }
}

export default Home