import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="intro">
        <h2>Welcome to Our Online Agriculture Store</h2>
        <p>Explore fresh and organic farm products delivered to your doorstep.</p>
      </div>
      
      <div className="categories">
        <h3>Shop By Category</h3>
        <div className="category-buttons">
          <button className="category-button" onClick={() => navigate('/products?category=fruits')}>Fruits</button>
          <button className="category-button" onClick={() => navigate('/products?category=vegetables')}>Vegetables</button>
          <button className="category-button" onClick={() => navigate('/products?category=dairy')}>Dairy</button>
          <button className="category-button" onClick={() => navigate('/products?category=grains')}>Grains</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
