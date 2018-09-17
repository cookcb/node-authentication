import React, {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            responseMessage: "",
            profile: "",
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

    }

    handleSubmit(event){

    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="username">Enter Email:</label>
                        <input name="username" type="text" />
                    </div>
                    <div>
                        <label for="password">Enter Password:</label>
                        <input name="password" type="text" />
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>
        )
    }
}
