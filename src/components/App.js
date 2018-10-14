import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from './Register'
import Home from './Home'
import Login from './Login'

const navStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: '400px',
    height: '40px',
    backgroundColor: '#87d3ff'
}

const tabStyle = {
    float: 'left',
    padding: '10px'
}
class App extends Component{
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul style={navStyle}>
                            <li style={tabStyle}>
                                <Link to="/register">Sign Up</Link>
                            </li>
                            <li style={tabStyle}>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path='/home' component={Home}></Route>
                    </div>
                </Router>
                <div>
                    <Login />
                </div>
            </div>
        )
    }
}

export default App;