import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register'
import Home from './Home'
import Login from './Login'

class App extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <Router>
                <div>
                    <Link to="/register">Sign Up</Link>
                    <Link to="/login">Login</Link>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path='/home' component={Home}></Route>
                </div>
            </Router>
        )
    }
}

export default App;