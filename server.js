const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(
  '/uploads',
  express.static(
    path.join(__dirname, 'uploads')
  )
);

mongoose.connect(process.env.MONGO_URI, {
  family: 4
})
.then(() => {
  console.log('MongoDB Connected');
})
.catch((err) => {
  console.log(err);
});
const rentalRoutes = require("./routes/rentalRoutes");
const bookRoutes = require('./routes/BookRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/rentals', rentalRoutes);

app.get('/', (req, res) => {
  res.send('BookStore API Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});