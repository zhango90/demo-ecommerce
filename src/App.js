import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route component={HomePage} path='/' exact></Route>
          <Route component={SignInAndSignUp} path='/sign-in-and-sign-up' exact></Route>
          <Route component={ShopPage} path='/shop' exact></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
