const express = require('express');
const { saveCart, getCart } = require('../controllers/cartController');

const router = express.Router();

router.post('/', saveCart);
router.get('/:email', getCart);

module.exports = router;