const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    items: [
      {
        id: String,
        title: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);