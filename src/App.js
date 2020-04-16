import React from 'react';
import './App.css';
import {Route , Switch }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compoent';
import ShopPage from './pages/shop/shop.component';
// some demo


function App() {
  return (
    <div>   
    <Switch>
    <Route exact  path='/' component={HomePage}/>
    <Route exact  path='/shop' component={ShopPage}/>
    </Switch>

    </div>
 
  );
}

export default App;
