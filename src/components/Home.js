import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("Well this worked");
        return(
            <div>Welcome {this.props.location.state.referrer}!</div>
        )
    }
}

export default Home;