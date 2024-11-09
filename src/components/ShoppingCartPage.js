import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

const DEFAULT_IMAGE = '/images/background.jpg'; 
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.id}>
            <img src={DEFAULT_IMAGE} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(addItemToCart(item))}>+</button>
            <button onClick={() => dispatch(removeItemFromCart(item.id))}>-</button>
            <button onClick={() => dispatch(deleteItemFromCart(item.id))}>Delete</button>
          </div>
        ))}
      </div>
      <p>Total: ${totalPrice}</p>
      <button>Checkout (Coming Soon)</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
};

export default ShoppingCartPage;
