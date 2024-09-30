import React from 'react';
import { Link } from 'react-router-dom';
import routesConfig from '../routesConfig'; // Usamos las mismas rutas que en el Header

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <nav>
          <ul className="flex justify-center space-x-6">
            {routesConfig.map((route) => (
              <li key={route.path}>
                <Link to={route.path} className="hover:underline">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} AI Custom Fashion. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
