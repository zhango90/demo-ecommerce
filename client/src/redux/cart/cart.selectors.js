import {createSelector} from 'reselect'

//input selector 
const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((a, b) => {
    return a + b.quantity
  }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, nextItem) => {
    return accumulator + (nextItem.price * nextItem.quantity)
  }, 0)
)