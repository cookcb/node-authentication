import React, {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import styles from '../styles.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }
    
    handleLogOut(event){
        axios.post('./logout')
        .then(response => {
            this.setState({
                redirect: true
            })
        })
        .catch(err => {
            console.log(err.response);
        });;
    }

    render(){
        if(this.state.redirect){
            return (
                <div>
                    <Redirect to={{
                        pathname: '/login'
                    }} />
                </div>
            )
        }else{
            return(
                <div className={styles.homeContainer}>
                    <div className={styles.welcomeHeader}>Welcome: {this.props.location.state.referrer}!</div>
                    <button className={styles.logoutButton} onClick={this.handleLogOut.bind(this)}>Log Out</button>
                </div>
            )
        }
    }
}

export default Home;