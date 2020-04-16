import React from 'react';
import './App.css';
import {Route , Switch }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compoent';
// some demo
import RouteDemo from './someDemo/router.component';


const HatsPage =()=><div>Hatpages</div>


function App() {
  return (
    <div>   
    <Switch>
    <Route  path='/hats' component={HatsPage}/>
    <Route exact  path='/' component={HomePage}/>
    </Switch>

    </div>
 
  );
}

export default App;
