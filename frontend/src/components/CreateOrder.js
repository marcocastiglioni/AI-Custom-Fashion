import React, { useState, useEffect } from 'react';
import { getCustomizationById, createOrder } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const CreateOrder = ({ customizationId }) => {
  const [customization, setCustomization] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomization = async () => {
      try {
        const data = await getCustomizationById(customizationId);
        setCustomization(data);
      } catch (error) {
        console.error('Error al obtener la personalización:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomization();
  }, [customizationId]);

  const handleCreateOrder = async () => {
    const orderData = {
      userId: '123', // ID del usuario autenticado
      shirtColor: customization.shirtColor,
      shirtStyle: customization.shirtStyle,
      size: 'M', // Puedes permitir que el usuario seleccione la talla
      quantity: 1,
    };

    try {
      await createOrder(orderData);
      navigate('/customizations'); // Navegar de vuelta a la lista de personalizaciones
    } catch (error) {
      console.error('Error al crear el pedido:', error);
    }
  };

  if (loading) return <p>Cargando personalización...</p>;

  return (
    <div>
      <h2>Revisar y Crear Pedido</h2>
      <p>Color: {customization.shirtColor}</p>
      <p>Estilo: {customization.shirtStyle}</p>
      <button onClick={handleCreateOrder}>Confirmar Pedido</button>
    </div>
  );
};

export default CreateOrder;
