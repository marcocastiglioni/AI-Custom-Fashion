import axios from 'axios';

// Definir la URL base de la API (puede configurarse a través de variables de entorno)
const API_BASE_URL = "http://localhost:4000/api";
const MESH_API_KEY="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuSnVpYzVwbXk1T1hGSjVmY1RIQTdUNVktRHZVbVVOR2xxVHBqS0hDVnU4In0.eyJleHAiOjE3Mjc3MjgzOTYsImlhdCI6MTcyNzY5MjY5MiwiYXV0aF90aW1lIjoxNzI3NjkyMzk2LCJqdGkiOiIwMjVjODQ1Yy01ODExLTQ0MGYtYmY1ZS1hY2IyYzgyYTY2NzEiLCJpc3MiOiJodHRwczovL2F1dGgubWVzaGNhcGFkZS5jb20vcmVhbG1zL21lc2hjYXBhZGUtbWUiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMTlhNWM2YzItOGYzOC00YmFjLWFmMzYtN2NiOTcwNDU2NzdhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWVzaGNhcGFkZS1tZSIsIm5vbmNlIjoiMDNkNWM5Y2MtOGNmYS00Nzk5LWIxM2EtMGRkNTBhZjg0ZTUxIiwic2Vzc2lvbl9zdGF0ZSI6IjYzYmJmY2UxLTc0MWEtNDk2Zi04NTljLWIxZWQ4NDgxZjllZCIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9tZXNoY2FwYWRlLmNvbSIsImh0dHBzOi8vbWUubWVzaGNhcGFkZS5jb20iLCJodHRwczovL21lc2hjYXBhZGUubWUiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1nY21jIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiNjNiYmZjZTEtNzQxYS00OTZmLTg1OWMtYjFlZDg0ODFmOWVkIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJNYXJjbyBDYXN0aWdsaW9uaSIsInByZWZlcnJlZF91c2VybmFtZSI6Im1hcmNvY2FzdGlnbGlvbmlAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6Ik1hcmNvIiwiZmFtaWx5X25hbWUiOiJDYXN0aWdsaW9uaSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJUE10a3RTbEYzWmFxU2dsSVpNcmFnZGRBVXlZX01MLVJLSC1JQU1qR2VoM2VWcE42S25BPXM5Ni1jIiwiZW1haWwiOiJtYXJjb2Nhc3RpZ2xpb25pQGdtYWlsLmNvbSJ9.iYx7OF2eoqz3p5Xisjkt9lr-p_GEAjbq8XWRKMaKFCVddQSbbC1kNXwr3nxfhxkxNnX3TKbps2B9S3Ly568Kj89kdRctGtZhm3UzAQsz4n71HsN8bGNX1vIV88MKHplcF_80H3NTqhNicH8IuKbeWpIPkI1g9MV9TScD7-bCyrghINxwg00Q6Pxb4wqrlgmpVW0e4AJQ-tLL181Fm0Ev53tb45xuPmIotOQtA9KIj66Gl9Lx2WxYZuV9aEQqwqRfu0mGTOM9vYhqfLHTcnsjQRCKAq3bZI2rzF8ZLA9fMzHWAlRCvutnKZ50lUhFo17x3vZyQnTsEOAENhpQWkTELA";
const MESH_API_URL="https://api.meshcapade.com/api/v1";

// Configuración básica de Axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,  // Asegúrate de que esta URL sea la del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para modificar headers dinámicamente, en este caso para 'multipart/form-data'
const setMultipartHeader = () => {
  apiClient.defaults.headers['Content-Type'] = 'multipart/form-data';
};

// Función para resetear headers a 'application/json'
const resetDefaultHeader = () => {
  apiClient.defaults.headers['Content-Type'] = 'application/json';
};

// Función para crear una nueva personalización
export const createCustomization = async (customizationData) => {
  try {
    const response = await apiClient.post('/customizations', customizationData);
    return response.data;
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

// Función para enviar imagen al backend
export const uploadImageToBackend = async (formData) => {
  try {
    // Cambiar el encabezado a 'multipart/form-data'
    setMultipartHeader();

    console.log('[api] Hacer la solicitud con el archivo (multipart)');
    console.log(apiClient);
    console.log('==========');

    // Hacer la solicitud con el archivo (multipart)
    const response = await apiClient.post('/scan', formData);
    // Restaurar el encabezado predeterminado después de la solicitud
    resetDefaultHeader();
    return response.data;
  } catch (error) {
    console.error('[API] Error al enviar la imagen:', error);
    throw error;
  }
};

// Create Empty Avatar
export const createEmptyAvatar = async () => {
  try {
    const response = await axios.post(`${MESH_API_URL}/avatars/create/from-images`, {}, {
      headers: {
        'Authorization': `Bearer ${MESH_API_KEY}`,
      },
    });
    return response.data.avatarID;
  } catch (error) {
    console.error('Error creating avatar:', error);
    throw error;
  }
};

// Upload Image to Avatar
export const uploadImageToAvatar = async (avatarID, formData) => {
  try {
    const response = await axios.put(`${MESH_API_URL}/avatar/${avatarID}/images`, formData, {
      headers: {
        'Authorization': `Bearer ${MESH_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Start Fitting Process
export const startFittingProcess = async (avatarID) => {
  try {
    const response = await axios.post(`${MESH_API_URL}/avatar/${avatarID}/fitting`, {}, {
      headers: {
        'Authorization': `Bearer ${MESH_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error starting fitting process:', error);
    throw error;
  }
};