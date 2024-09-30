import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import StyleSelector from './StyleSelector';

const ShirtCustomizer = () => {
  const [shirtColor, setShirtColor] = useState('#ffffff'); // Color de la camisa
  const [shirtStyle, setShirtStyle] = useState('manga larga'); // Estilo de la camisa

  // Manejar cambio de color desde el ColorPicker
  const handleColorChange = (newColor) => {
    setShirtColor(newColor);
  };

  // Manejar cambio de estilo desde el StyleSelector
  const handleStyleChange = (newStyle) => {
    setShirtStyle(newStyle);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Personaliza tu camisa</h1>

      {/* Selector de color */}
      <ColorPicker onColorChange={handleColorChange} />

      {/* Selector de estilo */}
      <StyleSelector selectedStyle={shirtStyle} onStyleChange={handleStyleChange} />

      {/* Vista previa de la camisa */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <h3>Vista previa de la camisa</h3>
        <div
          style={{
            margin: '0 auto',
            width: '200px',
            height: '250px',
            backgroundColor: shirtColor,
            border: '2px solid #000',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2em',
            color: '#333',
          }}
        >
          {shirtStyle}
        </div>
      </div>
    </div>
  );
};

export default ShirtCustomizer;
