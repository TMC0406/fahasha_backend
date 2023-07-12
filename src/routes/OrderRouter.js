const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const { authUserMiddleWare, authMiddleWare } = require('../middleware/authMiddleware');

router.post('/create/:id', authUserMiddleWare, OrderController.createOrder);
router.get('/get-order-all/:id', authUserMiddleWare, OrderController.getAllOrderDetail);
router.get('/get-order-detail/:id', OrderController.getOrderDetail);

module.exports = router;
