import React, { Component } from 'react'
import Polls from '../containers/Polls'
import Navigation from './Navigation'
import { Jumbotron, Well } from 'react-bootstrap'
import auth from '../../auth'
import { Router, browserHistory } from 'react-router'

class Home extends Component {
    constructor() {
        super()
        this.updateAuth = this.updateAuth.bind(this)
        this.state = {
            loggedIn: auth.loggedIn(),
            username: ''
        }
    }

    updateAuth(bool, username) {
        this.setState({
            loggedIn: bool,
            username: username || ''
        })
        
    }

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    }

    login(username, pass) {
        auth.login(username, pass)
    }

    logout() {
        auth.logout()
        this.context.router.push('/')
    }
    render() {
        return(
            <div style={{fontFamily:'Rubik Mono One, sans-serif'}} className="container">
                <Navigation loggedIn={this.state.loggedIn} logout={this.logout.bind(this)} login={this.login.bind(this)} username={this.state.username}></Navigation>
                <Jumbotron>
                    <h1 style={{fontFamily:'Lobster, cursive', fontSize: '10em'}}>VotePoll</h1>
                    <p>Create custom polls, vote and view results!</p>
                </Jumbotron>
                {this.props.location.pathname === '/' &&
                    <div style={{textAlign:'center'}}>
                        <Well>Create an account to create and remove your polls</Well>
                        <Well>If you are logged in you can add options to current polls</Well>
                        <Well>Vote on a poll to see the results</Well>
                        <Well>Share your polls with friends!</Well>
                    </div>
                }
                {this.props.children} 
            </div>
            
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object
}

export default Home