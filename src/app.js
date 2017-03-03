import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class App extends Component {

    render(){
        return (
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
    , document.getElementById('root'))