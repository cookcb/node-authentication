import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register'

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
                </div>
            </Router>
        )
    }
}

export default App;