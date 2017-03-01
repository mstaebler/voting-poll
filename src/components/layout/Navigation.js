import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'

class Navigation extends Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">VotePoll</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Latest Polls</NavItem>
                        <NavItem disabled eventKey={2} href="#">Create Poll</NavItem>
                        <NavItem disabled eventKey={2} href="#">Edit Poll</NavItem>
                    </Nav>
                    <Navbar.Form style={{marginRight:10}} pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Username" />
                            <FormControl type="text" placeholder="Password" />
                            {' '}
                            <Button type="submit">Login</Button>
                        </FormGroup>
                            <Button href="#">Sign Up</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation