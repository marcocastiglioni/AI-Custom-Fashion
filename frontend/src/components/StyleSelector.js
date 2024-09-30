import React from 'react';

const StyleSelector = ({ selectedStyle, onStyleChange }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Selecciona el estilo de la camisa</h3>
      <select value={selectedStyle} onChange={(e) => onStyleChange(e.target.value)}>
        <option value="manga larga">Manga larga</option>
        <option value="manga corta">Manga corta</option>
        <option value="cuello V">Cuello en V</option>
        <option value="cuello redondo">Cuello redondo</option>
        <option value="camisa casual">Camisa casual</option>
        <option value="camisa formal">Camisa formal</option>
      </select>
    </div>
  );
};

export default StyleSelector;
