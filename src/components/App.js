import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Register from './Register'
import Home from './Home'
import Login from './Login'

class App extends Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component = {Login}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path='/home' component={Home}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;