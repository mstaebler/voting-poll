import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Polls from './components/Polls'

class App extends Component {

    render(){
        return (
            <div>
                Hello React
                <Polls />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))