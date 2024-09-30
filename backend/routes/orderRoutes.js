const express = require('express');
const { 
    createOrder, 
    getOrderById, 
    getOrdersByUser, 
    updateOrderStatus 
} = require('../controllers/orderController');

const router = express.Router();

// Rutas de pedidos
router.post('/', createOrder);  // Crear un nuevo pedido
router.get('/:id', getOrderById);  // Obtener un pedido por su ID
router.get('/user/:userId', getOrdersByUser);  // Obtener pedidos por usuario
router.put('/:id', updateOrderStatus);  // Actualizar el estado de un pedido

module.exports = router;
