import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={SignInAndSignUp} path='/sign-in-and-sign-up' exact></Route>
        <Route component={ShopPage} path='/shop' exact></Route>
      </Switch>
    </div>
  );
}

export default App;
