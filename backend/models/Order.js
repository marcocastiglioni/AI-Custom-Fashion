const { Pool } = require('pg');
const pool = new Pool();

const createOrder = async (orderData) => {
  const { userId, shirtColor, shirtStyle } = orderData;
  const query = 'INSERT INTO orders (userId, shirtColor, shirtStyle) VALUES ($1, $2, $3)';
  await pool.query(query, [userId, shirtColor, shirtStyle]);
};

module.exports = { createOrder };
