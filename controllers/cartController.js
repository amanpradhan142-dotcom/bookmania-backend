const Cart = require('../models/Cart');

const saveCart = async (req, res) => {
  try {
    const { userEmail, items } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { userEmail },
      { userEmail, items },
      { new: true, upsert: true }
    );

    res.json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userEmail: req.params.email });

    res.json({
      success: true,
      data: cart ? cart.items : [],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { saveCart, getCart };