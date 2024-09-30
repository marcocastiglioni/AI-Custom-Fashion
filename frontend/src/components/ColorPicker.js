import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ onColorChange }) => {
  const [color, setColor] = useState('#ffffff'); // Color inicial (blanco)

  // Manejar el cambio de color
  const handleColorChange = (newColor) => {
    setColor(newColor.hex); // Actualizar el color en el estado local
    onColorChange(newColor.hex); // Notificar al componente padre del nuevo color seleccionado
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Selecciona el color de tu camisa</h3>
      <SketchPicker color={color} onChangeComplete={handleColorChange} />
      <div style={{ marginTop: '10px' }}>
        <p>Color seleccionado: <span style={{ fontWeight: 'bold', color }}>{color}</span></p>
      </div>
    </div>
  );
};

export default ColorPicker;
