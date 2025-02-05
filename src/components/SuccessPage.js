import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for shopping with us.</p>
      <Link to="/">
        <button className="home-button">Return to Home</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
