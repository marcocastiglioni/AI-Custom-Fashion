import { sendOrderToFactory } from '../services/factoryService.js';
import pool from '../database/postgresql.js';
import pkg from 'pg';
const { Pool } = pkg;

// Obtener todos los pedidos
const getOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);  // Enviar los resultados al frontend
  } catch (err) {
    console.error('Error al obtener pedidos', err);
    res.status(500).json({ error: 'Error al obtener los pedidos' });
  }
};

// Crear un nuevo pedido
const createOrder = async (req, res) => {
  const { userId, shirtColor, shirtStyle, size, quantity } = req.body;

  try {
    const query = `INSERT INTO orders (user_id, shirt_color, shirt_style, size, quantity, status)
                   VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const values = [userId, shirtColor, shirtStyle, size, quantity, 'pending'];

    const result = await pool.query(query, values);
    const newOrder = result.rows[0];

    // Llamar al servicio para enviar el pedido a la fábrica
    const factoryResponse = await sendOrderToFactory(newOrder);

    res.status(201).json({
      message: 'Pedido creado y enviado a la fábrica exitosamente',
      order: newOrder,
      factoryResponse: factoryResponse
    });
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({
      message: 'Error al crear el pedido',
      error: error.message,
    });
  }
};

// Obtener un pedido por su ID
const getOrderById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = `SELECT * FROM orders WHERE id = $1`;
    const result = await pool.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Pedido no encontrado',
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener el pedido:', error);
    res.status(500).json({
      message: 'Error al obtener el pedido',
      error: error.message,
    });
  }
};

// Obtener todos los pedidos de un usuario específico
const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const query = `SELECT * FROM orders WHERE user_id = $1`;
    const result = await pool.query(query, [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'No se encontraron pedidos para este usuario',
      });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los pedidos del usuario:', error);
    res.status(500).json({
      message: 'Error al obtener los pedidos del usuario',
      error: error.message,
    });
  }
};

// Actualizar el estado de un pedido
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const query = `UPDATE orders SET status = $1 WHERE id = $2 RETURNING *`;
    const values = [status, id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Pedido no encontrado',
      });
    }

    res.status(200).json({
      message: 'Estado del pedido actualizado exitosamente',
      order: result.rows[0],
    });
  } catch (error) {
    console.error('Error al actualizar el estado del pedido:', error);
    res.status(500).json({
      message: 'Error al actualizar el estado del pedido',
      error: error.message,
    });
  }
};

export {
  getOrders,
  createOrder,
  getOrderById,
  getOrdersByUser,
  updateOrderStatus
}