import axios from 'axios';

// Definir la URL base de la API (puede configurarse a través de variables de entorno)
const API_BASE_URL = process.env.REACT_APP_API_URL;

// Configuración básica de Axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,  // Asegúrate de que esta URL sea la del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para crear una nueva personalización
export const createCustomization = async (customizationData) => {
  try {
    
    console.log(`[API] Create Customization`);
    console.log(customizationData);

    const response = await apiClient.post('/customizations', customizationData);
    
    // Si la solicitud fue exitosa, puedes manejar la respuesta aquí
    console.log('[API] Personalización guardada:', response.data);

    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error('[API] Error al crear la personalización:', error);
    throw error;
  }
};

// Función para obtener una personalización por ID
export const getCustomizationById = async (id) => {
  try {
    const response = await apiClient.get(`/customizations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la personalización:', error);
    throw error;
  }
};

// Función para obtener todas las personalizaciones de un usuario
export const getCustomizationsByUser = async (userId) => {
  try {
    const response = await apiClient.get(`/customizations/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las personalizaciones del usuario:', error);
    throw error;
  }
};

// Función para actualizar una personalización
export const updateCustomization = async (id, customizationData) => {
  try {
    const response = await apiClient.put(`/customizations/${id}`, customizationData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la personalización:', error);
    throw error;
  }
};

// Función para crear un pedido
export const createOrder = async (orderData) => {
  try {
    const response = await apiClient.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    throw error;
  }
};

// Función para obtener un pedido por su ID
export const getOrderById = async (id) => {
  try {
    const response = await apiClient.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el pedido:', error);
    throw error;
  }
};

// Función para actualizar el estado de un pedido
export const updateOrderStatus = async (id, status) => {
  try {
    const response = await apiClient.put(`/orders/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el estado del pedido:', error);
    throw error;
  }
};
