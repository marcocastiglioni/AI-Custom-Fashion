import axios from 'axios';
import config from '../config/config.js';

// Servicio para enviar especificaciones de prendas personalizadas a la fábrica
const sendOrderToFactory = async (orderDetails) => {
  try {
    // Definir la URL y la clave de API de la fábrica (obtenidas desde config)
    const factoryApiUrl = config.factoryAPI.baseURL + '/orders';
    const apiKey = config.factoryAPI.apiKey;

    // Datos de la prenda personalizada que se enviarán a la fábrica
    const factoryPayload = {
      orderId: orderDetails.orderId,
      userId: orderDetails.userId,
      shirtColor: orderDetails.shirtColor,
      shirtStyle: orderDetails.shirtStyle,
      size: orderDetails.size,
      quantity: orderDetails.quantity
    };

    console.log( '[sendOrderToFactory]' );
    console.log( factoryPayload );

    // Enviar la solicitud POST a la fábrica automatizada
    const response = await axios.post(factoryApiUrl, factoryPayload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Manejar la respuesta de la fábrica
    if (response.status === 200) {
      console.log('Pedido enviado exitosamente a la fábrica:', response.data);
      return response.data; // Datos devueltos por la fábrica
    } else {
      console.error('Error al enviar el pedido a la fábrica:', response.statusText);
      throw new Error('Error al procesar el pedido en la fábrica.');
    }
  } catch (error) {
    console.error('Error en el servicio de fábrica:', error.message);
    throw new Error('Fallo en la conexión con la API de fábrica.');
  }
};

export {
  sendOrderToFactory
};
