import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import CreatePoll from './components/containers/CreatePoll'
import DeletePoll from './components/containers/DeletePoll'
import Signup from './components/containers/Signup'
import Polls from './components/containers/Polls'
import auth from './auth'

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const NotFound = () => (
    <div style={{textAlign:'center', marginTop:100}}>
        <h1>404.. This page is not found!</h1>
    </div>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/Polls" component={Polls} />
            <Route path="/CreatePoll" component={CreatePoll} onEnter={requireAuth} />
            <Route path="/DeletePoll" component={DeletePoll} onEnter={requireAuth} />
            <Route path="/Signup" component={Signup} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
    , document.getElementById('root'))