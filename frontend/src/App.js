import React, { useState, useContext }  from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Navigate  } from 'react-router-dom';
import CustomizationList from './components/CustomizationList';
import PersonalizationComponent from './components/PersonalizationComponent';
import NewCustomization from './components/NewCustomization';
import OrderComponent from './components/OrderComponent';
import CreateOrder from './components/CreateOrder';
import Header from './components/Header';
import Footer from './components/Footer';
import Scan3DComponent from './components/Scan3DComponent';
import AvatarInitiate from './components/AvatarInitiate';
import AvatarUpload from './components/AvatarUpload';
import AvatarFitting from './components/AvatarFitting';
import AvatarRenderer from './components/AvatarRenderer';
import { UserContext } from './contexts/UserContext';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [ avatarId, setAvatarId] = useState(null);
  const [ fittingCompleted, setFittingCompleted] = useState(false);
  const { meshcapadeUserId, loading, error } = useContext(UserContext);
  const [user, setUser] = useState(null);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">

          {/* Agrega el header en la parte superior de la aplicación */}
          <Header />

          {/* Rutas de la aplicación */}
          <main className="flex-grow">
            <Routes>
              
              {/* Public Routes */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Route */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

              {/* Protected Route: Redirect unknown routes */}
              <Route path="*" element={<Navigate to="/login" />} />

              {/* Protected Route: Ruta para la página de inicio */}
              <Route path="/" element={<Login />} />

              {/* Protected Route: Ruta para listar todas las personalizaciones */}
              <Route path="/customizations" element={<ProtectedRoute><CustomizationList /></ProtectedRoute>} />

              {/* Protected Route: Ruta para crear una nueva personalización */}
              <Route path="/customization/new" element={<ProtectedRoute><NewCustomization /></ProtectedRoute>} />

              {/* Protected Route: Ruta para ver los detalles de una personalización específica */}
              <Route path="/customization/:id" element={<ProtectedRoute><PersonalizationPage /></ProtectedRoute>} />

              {/* Protected Route: Ruta para ver los detalles de un pedido específico */}
              <Route path="/orders/:id" element={<ProtectedRoute><OrderComponent /></ProtectedRoute>} />

              {/* Protected Route: Ruta para crear un pedido basado en una personalización */}
              <Route path="/create-order/:customizationId" element={<ProtectedRoute><CreateOrderPage /></ProtectedRoute>} />

              {/* Protected Route: Nueva ruta para el Escaneo 3D */}
              <Route path="/scan3d" element={<ProtectedRoute><Scan3DComponent /></ProtectedRoute>} />

              <Route
                path="/create-avatar"
                element={
                  meshcapadeUserId ? (
                    !avatarId ? (
                      <AvatarInitiate userId={meshcapadeUserId} onInitiate={setAvatarId} />
                    ) : !fittingCompleted ? (
                      <>
                        <AvatarUpload avatarId={avatarId} onUpload={() => {}} />
                        <AvatarFitting avatarId={avatarId} onFitting={() => setFittingCompleted(true)} />
                      </>
                    ) : (
                      <AvatarRenderer avatarId={avatarId} />
                    )
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />

            </Routes>
          </main>

          {/* Agrega el footer en la parte inferior de la aplicación */}
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
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
