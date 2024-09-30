// Shirt3DRenderer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';

const Shirt3DRenderer = ({ color }) => {
  return (
    <Canvas>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </Canvas>
  );
};

export default Shirt3DRenderer;
