import React, { useState, useEffect } from 'react';
import { getOrderById } from '../utils/api';
import { useParams } from 'react-router-dom';

const OrderComponent = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(id);
        setOrder(data);
      } catch (error) {
        console.error('Error al obtener el pedido:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <p>Cargando pedido...</p>;

  return (
    <div>
      <h2>Detalles del Pedido</h2>
      <p>ID del pedido: {order._id}</p>
      <p>Color: {order.shirtColor}</p>
      <p>Estilo: {order.shirtStyle}</p>
      <p>Tamaño: {order.size}</p>
      <p>Estado: {order.status}</p>
    </div>
  );
};

export default OrderComponent;
