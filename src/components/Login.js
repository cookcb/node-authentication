import React, {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import styles from '../styles.css'

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
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('./login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response =>  {
            let username = response.data.username;
            let redirect = true;
            let message = response.data.message;
            if(typeof username === 'undefined'){
                redirect = false;
            }
            this.setState({
                responseMessage: message,
                redirect: redirect,
                profile: username
            })
        })
        .catch(err => {
            console.log(err.response);
        });
    }


    render(){
        if(this.state.redirect){
            return (
                <div>
                    <Redirect to={{
                        pathname: '/home',
                        state: { referrer: this.state.profile}
                    }} />
                </div>
            )
        }else{
            return(
                <div className={styles.formStyle}>
                    <span className={styles.header}>Sign In</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles.inputContainer}>
                            <input name="username" type="text" placeholder="Username" onChange={this.handleChange}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <input name="password" type="text" placeholder="Password" onChange={this.handleChange}/>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>Log In</button>
                        </div>
                    </form>
                    <span>{this.state.responseMessage}</span>
                </div>
            )
        }
    }
}

export default Login;
