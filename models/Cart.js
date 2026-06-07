const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);