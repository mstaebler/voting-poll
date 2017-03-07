import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Axios from 'axios'

class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            loggedIn: props.loggedIn
        })
    }

    componentWillMount() {
        this.props.login()
    }

    updateField(event) {
        this.setState({[event.target.id]: event.target.value})  
    }

    login(event) {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    logout(event) {
        event.preventDefault()
        this.props.logout()
    }

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <a>VotePoll</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.state.loggedIn &&
                    <Nav>
                        <LinkContainer to={{pathname: '/Polls'}}><NavItem>Latest Polls</NavItem></LinkContainer>
                        <LinkContainer to={{pathname: '/CreatePoll'}}><NavItem>Create Poll</NavItem></LinkContainer>
                        <LinkContainer to={{pathname: '/YourPolls'}}><NavItem>Your Polls</NavItem></LinkContainer>
                    </Nav>
                    }
                    {!this.state.loggedIn &&
                    <Nav>
                        <LinkContainer to={{pathname: '/Polls'}}><NavItem>Latest Polls</NavItem></LinkContainer>
                    </Nav>
                    }
                    <Navbar.Form style={{marginRight:10}} pullRight>
                        {!this.state.loggedIn &&
                            <div>
                            <FormGroup>
                                <FormControl id="username" onChange={this.updateField.bind(this)} type="text" placeholder="Username" />
                                <FormControl id="password" onChange={this.updateField.bind(this)} type="text" placeholder="Password" />
                                {' '}
                                <Button onClick={this.login.bind(this)} type="submit">Login</Button>
                            </FormGroup>
                                <LinkContainer to={{pathname: '/Signup'}}><Button href="#/Signup">Sign Up</Button></LinkContainer>
                            </div>
                        }
                        {this.state.loggedIn &&
                        <div>
                            <Navbar.Brand>Hello {this.props.username}</Navbar.Brand>
                            <Button onClick={this.logout.bind(this)} type="submit">Logout</Button>     
                        </div> 
                        }
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation