import React, {Component} from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';


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
        console.log("Well this worked");
        if(this.state.redirect){
            return (
                <div>
                    <Redirect to={{
                        pathname: '/home'
                    }} />
                </div>
            )
        }else{
            return(
                <div>
                    <div>Welcome: {this.props.location.state.referrer}!</div>
                    <button onClick={this.handleLogOut.bind(this)}>Log Out</button>
                </div>
            )
        }
    }
}

export default Home;