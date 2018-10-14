import React, {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import styles from '../styles.css'

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordCheck: "",
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
        if(this.state.username === ""){
            this.setState({
                responseMessage: "Missing Username"
            });
        }else if(this.state.password == ""){
            this.setState({
                responseMessage: "Missing Password"
            });
        }
        else if(this.state.passwordCheck !== this.state.password){
            this.setState({
                responseMessage: "Passwords do not match"
            });
        }else{
            axios.post('/register', {
                username: this.state.username,
                password: this.state.password
            })
            .then((response) => {
                console.log(response.data);
                this.setState({
                    responseMessage: response.data.message,
                    redirect: true,
                    profile: response.data.username
                });
            })
            .catch(err => {
                console.log(err.response);
            });
        }
    }

    render() {
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
            return (
                <div className={styles.formStyleRegister}>
                    <span className={styles.header}>Register</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles.inputContainer}>
                            <input name="username" type="text" placeHolder="Enter Username" onChange={this.handleChange}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <input name="password" type="text" placeHolder="Enter Password" onChange={this.handleChange}/>
                        </div>
                        <div className={styles.inputContainer}>
                            <input name="passwordCheck" type="text" placeHolder="Enter Password Again" onChange={this.handleChange}/>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit" className={styles.button}>Sign Up</button>
                        </div>
                    </form>
                    <span>{this.state.responseMessage}</span>
                </div>
            )
        }
    }
}

export default Register;