import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import CustomizationList from './components/CustomizationList';
import PersonalizationComponent from './components/PersonalizationComponent';
import NewCustomization from './components/NewCustomization';
import OrderComponent from './components/OrderComponent';
import CreateOrder from './components/CreateOrder';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Agrega el header en la parte superior de la aplicación */}
      <Header />

      {/* Rutas de la aplicación */}
      <main className="flex-grow">
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<CustomizationList />} />

          {/* Ruta para listar todas las personalizaciones */}
          <Route path="/customizations" element={<CustomizationList />} />

          {/* Ruta para crear una nueva personalización */}
          <Route path="/customization/new" element={<NewCustomization />} />

          {/* Ruta para ver los detalles de una personalización específica */}
          <Route path="/customization/:id" element={<PersonalizationPage />} />

          {/* Ruta para ver los detalles de un pedido específico */}
          <Route path="/orders/:id" element={<OrderComponent />} />

          {/* Ruta para crear un pedido basado en una personalización */}
          <Route path="/create-order/:customizationId" element={<CreateOrderPage />} />
        </Routes>
      </main>

      {/* Agrega el footer en la parte inferior de la aplicación */}
      <Footer />
    </div>
  </Router>
  );
};

// Página para ver una personalización específica (Extraer el ID desde la URL)
const PersonalizationPage = () => {
  const { id } = useParams();
  return <PersonalizationComponent customizationId={id} />;
};

// Página para crear un pedido basado en una personalización
const CreateOrderPage = () => {
  const { customizationId } = useParams();
  return <CreateOrder customizationId={customizationId} />;
};

export default App;
