import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routesConfig from '../routesConfig'; // Importamos la configuración de rutas

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Custom Fashion</h1>
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776; {/* Icono hamburguesa */}
        </button>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {routesConfig.map((route) => (
              <li key={route.path}>
                <Link to={route.path} className="hover:underline">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="space-y-4 p-4">
          {routesConfig.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className="block text-lg"
                onClick={toggleMenu}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
