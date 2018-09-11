import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            responseMessage: "",
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/register', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            this.setState({
                responseMessage: response.data.message,
                redirect: true
            });
        })
        .catch(err => {
            console.log(err.response);
        });
    }

    render() {
        if(this.state.redirect){
            console.log("TEST");
            return <Redirect to='/Home' />
        }else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label for="username">Enter Username:</label>
                            <input name="username" type="text" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label for="password">Enter Password:</label>
                            <input name="password" type="text" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                    <span>{this.state.responseMessage}</span>
                </div>
            )
        }
    }
}

export default Register;