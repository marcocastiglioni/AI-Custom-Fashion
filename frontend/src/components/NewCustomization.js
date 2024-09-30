import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import StyleSelector from './StyleSelector';
import { createCustomization } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const NewCustomization = () => {
  const [shirtColor, setShirtColor] = useState('#ffffff');
  const [shirtStyle, setShirtStyle] = useState('manga larga');
  const navigate = useNavigate();

  const handleCreateCustomization = async () => {
    const customizationData = {
      userId: '123', // ID del usuario autenticado
      shirtColor,
      shirtStyle,
    };
    try {
      await createCustomization(customizationData);
      navigate('/customizations'); // Navegar a la lista de personalizaciones
    } catch (error) {
      console.error('[FE - NewCustomization] Error al crear personalización:', error);
    }
  };

  return (
    <div>
      <h2>Crea una nueva personalización</h2>
      <ColorPicker onColorChange={setShirtColor} />
      <StyleSelector selectedStyle={shirtStyle} onStyleChange={setShirtStyle} />
      <button onClick={handleCreateCustomization}>Guardar Personalización</button>
    </div>
  );
};

export default NewCustomization;
