import React, { useState, useEffect } from 'react';
import { getCustomizationById } from '../utils/api';

const PersonalizationComponent = ({ customizationId }) => {
  const [customization, setCustomization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llamar a la API para obtener la personalización por ID
    const fetchCustomization = async () => {
      try {
        const data = await getCustomizationById(customizationId);
        setCustomization(data);
      } catch (err) {
        setError('Error al obtener la personalización.');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomization();
  }, [customizationId]);

  if (loading) return <p>Cargando personalización...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Detalles de la Personalización</h2>
      <p>Color: {customization.shirtColor}</p>
      <p>Estilo: {customization.shirtStyle}</p>
      <p>Tamaño: {customization.size}</p>
    </div>
  );
};

export default PersonalizationComponent;
