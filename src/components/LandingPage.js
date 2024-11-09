import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Plant Shop</h1>
      <p>Your source for beautiful, sustainable houseplants.</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
};

export default LandingPage;
