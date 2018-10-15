import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
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
                    <div>
                        <ul style={navStyle}>
                            <li style={tabStyle}>
                                <Link to="/register">Sign Up</Link>
                            </li>
                            <li style={tabStyle}>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component = {Login}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/register" component={Register}></Route>
                            <Route exact path='/home' component={Home}></Route>
                        </Switch>
                    </div>
            </div>
        )
    }
}

export default App;