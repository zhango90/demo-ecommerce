import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>Hello boy</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path='/' exact></Route>
        <Route component={HatsPage} path='/hats' exact></Route>
      </Switch>
    </div>
  );
}

export default App;
