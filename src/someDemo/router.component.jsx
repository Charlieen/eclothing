import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';

const HomePage2 = ()=> {
   // console.log(props);
    return (
        <div>
        <h1>Home page test one </h1>
        </div>
    )
}


const TopicsList= ()=>(
    <div>
    <h1>TopicsList page</h1>
    </div>
)


export default class RouterDemo extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
            <Link to='/demopage'>link1</Link>
            <button type="button" onClick={()=>this.props.history.push('/blog/demopage')}>link to link1</button>
            <Route exact path='/demo/link' component={HomePage2}/> 
              <p>This is RouteDemo page</p>
            </div>
        )
    }
}

