import React, { Component } from 'react'
import Polls from '../containers/Polls'
import Navigation from './Navigation'
import { Jumbotron } from 'react-bootstrap'

class Home extends Component {
    render(){
        return(
            <div className="container">
                <Navigation></Navigation>
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