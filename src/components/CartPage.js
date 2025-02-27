import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {/* Display cart items */}
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>

                  {/* Quantity control */}
                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item)}>+</button>
                  </div>

                  {/* Remove item button */}
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display total price */}
      <div className="cart-total">
        <p>Total: ₹{totalPrice}</p>
      </div>

      {/* Checkout button */}
      <div className="checkout-button">
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};


export default CartPage;
