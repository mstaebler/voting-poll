import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Axios from 'axios'

class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    updateField(event){
        this.setState({[event.target.id]: event.target.value})  
    }

    login(event){
        var loginInfo = `username=${this.state.username}`
        Axios
        .get(`/auth/user?${loginInfo}`)
        .then((res) => console.log(res.data[0].password))
        .catch((err) => console.log(err))
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
                    <Nav>
                        <LinkContainer to={{pathname: '/Polls'}}><NavItem>Latest Polls</NavItem></LinkContainer>
                        <LinkContainer to={{pathname: '/CreatePoll'}}><NavItem>Create Poll</NavItem></LinkContainer>
                        <LinkContainer to={{pathname: '/DeletePoll'}}><NavItem>Delete Poll</NavItem></LinkContainer>
                    </Nav>
                    <Navbar.Form style={{marginRight:10}} pullRight>
                        <FormGroup>
                            <FormControl id="username" onChange={this.updateField.bind(this)} type="text" placeholder="Username" />
                            <FormControl id="password" onChange={this.updateField.bind(this)} type="text" placeholder="Password" />
                            {' '}
                            <Button onClick={this.login.bind(this)} type="submit">Login</Button>
                        </FormGroup>
                            <LinkContainer to={{pathname: '/Signup'}}><Button href="#/Signup">Sign Up</Button></LinkContainer>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation