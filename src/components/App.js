import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register'
import Home from './Home'

class App extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <Router>
                <div>
                    <Link to="/register">Sign Up</Link>
                    <Route path="/register" component={Register}></Route>
                    <Route path='/home' component={Home}></Route>
                </div>
            </Router>
        )
    }
}

export default App;