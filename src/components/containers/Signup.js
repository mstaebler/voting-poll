import React, { Component } from 'react'
import styles from './styles'
import Axios from 'axios'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    uploadUser(user){
        Axios
        .post('/auth/user', user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    validate({username, password}){
        if(username.length > 0 && password.length > 0){
            return true
        }
        return false
    }

    createAccount(event){
        var newUser = {username: this.state.email, password: this.state.password}
        if(this.validate(newUser)){
            this.setState({
                email: '',
                password: ''
            })
            this.uploadUser(newUser)
        }
        else{
            console.log('invalid Username')
        }
        
    }

    updateField(event){
        this.setState({[event.target.id]: event.target.value})  
    }

    render(){
        const style = styles.poll
        return(
            <div style={style.container}>
                <li style={style.list}>
                    <h3 style={style.header}>Create Account</h3>
                    <FormGroup>
                        <FormControl id="email" onChange={this.updateField.bind(this)} type="text" placeholder="Email" />
                        <FormControl id="password" onChange={this.updateField.bind(this)} type="text" placeholder="Password" />
                        {' '}
                        <Button onClick={this.createAccount.bind(this)} type="submit">Create Account</Button>
                    </FormGroup>
                </li>
            </div>
        )
    }
}

export default Signup