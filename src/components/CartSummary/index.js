// Write your code here
// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      const summaryCart = cartList.reduce(
        (total, each) => total + each.price * each.quantity,
        0,
      )
      console.log(summaryCart)
      return (
        <div>
          <h1 className="cart-heading-summary">
            Order Total:{' '}
            <span className="order-value"> Rs {summaryCart} /- </span>
          </h1>
          <p className="total-cart-no">{cartList.length} items in Cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
