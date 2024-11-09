import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';


const products = [
  { id: 1, name: 'Aloe Vera', price: 15, category: 'Succulents' },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Succulents' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 50, category: 'Tropical' },
  { id: 4, name: 'Bamboo Palm', price: 30, category: 'Tropical' },
  { id: 5, name: 'Spider Plant', price: 10, category: 'Air-Purifying' },
  { id: 6, name: 'Peace Lily', price: 25, category: 'Air-Purifying' },
];

const DEFAULT_IMAGE = '/images/background.jpg';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', textAlign: 'center', width: '200px' }}>
            <img 
              src={DEFAULT_IMAGE}  
              alt={product.name} 
              style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
            />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.find(item => item.id === product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
