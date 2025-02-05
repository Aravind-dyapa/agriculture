import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"; // Ensure you have the CSS file for styling

const Checkout = ({ cart, setCart }) => {
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(
        cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    const [finalTotal, setFinalTotal] = useState(total);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const validPromoCodes = {
        FARM10: 10,
        ORGANIC15: 15,
        SAVE10: 10,
        FARM20: 20,
    };

    useEffect(() => {
        setFinalTotal(total - (total * discount) / 100);
    }, [discount, total]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const applyPromoCode = () => {
        if (validPromoCodes[promoCode]) {
            setDiscount(validPromoCodes[promoCode]);
        } else {
            alert("Invalid promo code!");
        }
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }
        setIsProcessing(true);
        setTimeout(() => {
            setCart([]); // Clear cart after order
            navigate("/success");
        }, 3000);
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>

            {/* Promo Code Section */}
            <div className="promo-code-section">
                <input
                    type="text"
                    placeholder="Enter Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={applyPromoCode}>Apply</button>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Total: ₹{total}</p>
                <p>Discount: {discount}%</p>
                <h4>Final Total: ₹{finalTotal}</h4>
            </div>

            {/* Payment Method Selection */}
            <div className="payment-options">
                <h3>Select Payment Method</h3>
                <label>
                    <input type="radio" value="Credit/Debit Card" name="payment" onChange={handlePaymentMethodChange} />
                    Credit/Debit Card
                </label>
                <label>
                    <input type="radio" value="UPI" name="payment" onChange={handlePaymentMethodChange} />
                    UPI
                </label>
                <label>
                    <input type="radio" value="Net Banking" name="payment" onChange={handlePaymentMethodChange} />
                    Net Banking
                </label>
                <label>
                    <input type="radio" value="Cash on Delivery" name="payment" onChange={handlePaymentMethodChange} />
                    Cash on Delivery
                </label>
            </div>

            {/* Checkout Form */}
            <form className="checkout-form" onSubmit={handleCheckout}>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} required></textarea>

                {/* Checkout Button with Processing Animation */}
                <div className="checkout-button">
                    {isProcessing ? (
                        <div className="loading-spinner"></div>
                    ) : (
                        <button type="submit">Complete Purchase</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Checkout;
