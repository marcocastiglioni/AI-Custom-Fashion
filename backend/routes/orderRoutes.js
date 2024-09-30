import express from 'express';
import { createOrder, getOrderById, getOrdersByUser, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

// Rutas de pedidos
router.post('/', createOrder);  // Crear un nuevo pedido
router.get('/:id', getOrderById);  // Obtener un pedido por su ID
router.get('/user/:userId', getOrdersByUser);  // Obtener pedidos por usuario
router.put('/:id', updateOrderStatus);  // Actualizar el estado de un pedido

export default router;
