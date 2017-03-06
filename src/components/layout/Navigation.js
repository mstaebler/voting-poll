import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Navigation extends Component {
    navidate(){

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
                            <FormControl type="text" placeholder="Username" />
                            <FormControl type="text" placeholder="Password" />
                            {' '}
                            <Button type="submit">Login</Button>
                        </FormGroup>
                            <LinkContainer to={{pathname: '/Signup'}}><Button href="#/Signup">Sign Up</Button></LinkContainer>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation