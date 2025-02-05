import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductList.css"; // Ensure CSS is present

const products = [
  { id: 1, name: "Apple", category: "fruits", price: 2 },
  { id: 2, name: "Banana", category: "fruits", price: 1 },
  { id: 3, name: "Carrot", category: "vegetables", price: 1.5 },
  { id: 4, name: "Tomato", category: "vegetables", price: 1.8 },
  { id: 5, name: "Basil", category: "herbs", price: 3 },
  { id: 6, name: "Mint", category: "herbs", price: 2.5 },
  { id: 7, name: "Milk", category: "dairy", price: 4 },
  { id: 8, name: "Cheese", category: "dairy", price: 5 },
  { id: 9, name: "Wheat", category: "grains", price: 3.2 },
  { id: 10, name: "Rice", category: "grains", price: 2.8 },
];

const ProductList = ({ addToCart }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : products;

  return (
    <div className="product-list">
      <h2>Products</h2>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
