import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
const CartIcon = (props) => {
  return (
    <div className='cart-icon' onClick={props.toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
  <span className='item-count'>{props.cartItemsNumber}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItemsNumber: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
