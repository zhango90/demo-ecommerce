import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux//cart/cart.actions' 

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, hidden}) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.length ? cartItems.map(item => {
          return (
            <CartItem id={item.id} item={item}></CartItem>
          )
        }): <span>Please insert an Item in the cart</span>}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        hidden()
        }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
const mapDispatchToProps = dispatch => ({
  hidden: () => dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
