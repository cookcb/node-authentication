import React, {Component} from 'react';
import axios from 'axios';


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
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
        axios.post('/register', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
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
        )
    }
}

export default Register;