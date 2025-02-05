import React, { useState } from 'react';

const Checkout = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order submitted');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="address"
                    placeholder="Shipping Address"
                    value={formData.address}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Complete Purchase</button>
            </form>
        </div>
    );
};

export default Checkout;
