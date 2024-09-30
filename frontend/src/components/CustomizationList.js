import React, { useState, useEffect } from 'react';
import { getCustomizationsByUser } from '../utils/api';
import { Link } from 'react-router-dom';

const CustomizationList = () => {
  const [customizations, setCustomizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = '123'; // Asumiendo que tienes el ID del usuario autenticado

  useEffect(() => {
    const fetchCustomizations = async () => {
      try {
        const data = await getCustomizationsByUser(userId);
        setCustomizations(data);
      } catch (error) {
        console.error('Error al obtener personalizaciones:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomizations();
  }, [userId]);

  if (loading) return <p>Cargando personalizaciones...</p>;

  return (
    <div>
      <h2>Mis Personalizaciones</h2>
      <ul>
        {customizations.map((customization) => (
          <li key={customization._id}>
            <Link to={`/customization/${customization._id}`}>
              {customization.shirtStyle} - {customization.shirtColor}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/customization/new">Crear nueva personalización</Link>
    </div>
  );
};

export default CustomizationList;
