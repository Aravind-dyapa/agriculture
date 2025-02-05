import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css"; // Ensure CSS file exists

const products = [
  { id: 1, name: "Apple", category: "Fruits", price: 2, description: "Fresh and juicy apples." },
  { id: 2, name: "Banana", category: "Fruits", price: 1, description: "Ripe and sweet bananas." },
  { id: 3, name: "Carrot", category: "Vegetables", price: 1.5, description: "Organic crunchy carrots." },
  { id: 4, name: "Tomato", category: "Vegetables", price: 1.8, description: "Freshly picked tomatoes." },
  { id: 5, name: "Basil", category: "Herbs", price: 3, description: "Aromatic basil leaves." },
  { id: 6, name: "Mint", category: "Herbs", price: 2.5, description: "Cool and refreshing mint." },
  { id: 7, name: "Milk", category: "Dairy", price: 4, description: "Pure and fresh milk." },
  { id: 8, name: "Cheese", category: "Dairy", price: 5, description: "Aged cheese with rich flavor." },
  { id: 9, name: "Wheat", category: "Grains", price: 3.2, description: "Whole grain wheat." },
  { id: 10, name: "Rice", category: "Grains", price: 2.8, description: "Premium quality rice." },
];

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <br />
      <Link to="/products"><button>Back to Products</button></Link>
    </div>
  );
};

export default ProductDetails;
