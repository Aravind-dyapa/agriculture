import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import FeaturedProducts from "./components/FeaturedProducts";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout/Checkout";
import SuccessPage from "./components/SuccessPage";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  const increaseQuantity = (product) => {
    setCart(cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <header className="header">
          <h1>Farmer's E-Commerce Platform</h1>
        </header>

        <nav className="navigation">
          <Link to="/"><button className="nav-button">Home</button></Link>
          <Link to="/products?category=fruits"><button className="nav-button">Fruits</button></Link>
          <Link to="/products?category=vegetables"><button className="nav-button">Vegetables</button></Link>
          <Link to="/products?category=herbs"><button className="nav-button">Herbs</button></Link>
          <Link to="/products?category=dairy"><button className="nav-button">Dairy</button></Link>
          <Link to="/products?category=grains"><button className="nav-button">Grains</button></Link>
          <Link to="/contact"><button className="nav-button">Contact Us</button></Link>
          <Link to="/feedback"><button className="nav-button">Feedback</button></Link>
          <Link to="/cart"><button className="nav-button">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</button></Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <FeaturedProducts />
            </>
          } />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} />} />
          <Route path="/checkout" element={<Checkout cart={cart} totalAmount={totalAmount} setCart={setCart} />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
