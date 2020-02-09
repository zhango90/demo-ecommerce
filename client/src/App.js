import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component'
//import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
const App = ({ checkUserSession, currentUser}) => {

  useEffect(()=> {
    //const { checkUserSession } = props
    checkUserSession()
  }, [checkUserSession])

/*   componentDidMount() {
    
  } */
  /* this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
 
      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        });
      });
    }
 
    this.props.setCurrentUser(userAuth);
  }); */

  /* componentWillUnmount() {
    this.unsubscribeFromAuth();
  } */


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' exact component={CheckoutPage} />
        <Route path='/signin' render={() => currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
