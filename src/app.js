import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import DisplayPolls from './components/presentation/DisplayPolls'
import CreatePoll from './components/presentation/CreatePoll'
import EditPoll from './components/presentation/EditPoll'
import Signup from './components/presentation/Signup'
import Polls from './components/containers/Polls'

const NotFound = () => (
    <div style={{textAlign:'center', marginTop:100}}>
        <h1>404.. This page is not found!</h1>
    </div>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/Polls" component={Polls} />
            <Route path="/CreatePoll" component={CreatePoll} />
            <Route path="/EditPoll" component={EditPoll} />
            <Route path="/Signup" component={Signup} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
    , document.getElementById('root'))