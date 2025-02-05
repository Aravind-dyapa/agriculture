const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // To parse JSON requests

// Sample Route for Checkout Order Submission
app.post('/submit-order', (req, res) => {
  const { customerDetails, orderItems } = req.body;

  // Process the order, like saving it to a database
  console.log('Received Order:', customerDetails, orderItems);

  // Respond with a success message
  res.json({ message: 'Order submitted successfully!', orderId: '123456' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
