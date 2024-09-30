const express = require('express');
const router = express.Router();
const customizationController = require('../controllers/customizationController');


// Ruta para personalizaciones
// router.post('/', createCustomization);  // Crear una nueva personalización
router.post('/', customizationController.createCustomization);
// router.post('/', (req, res, next) => {
//   console.log('[ROUTES] Solicitud recibida en /api/customizations');
//   next();  // Esto permite que la solicitud pase al controlador
// }, customizationController.createCustomization);
router.get('/:id', customizationController.getCustomizationById); // Obtener una personalización por su ID
router.get('/user/:userId', customizationController.getCustomizationsByUser); // Obtener todas las personalizaciones de un usuario específico
router.put('/:id', customizationController.updateCustomization); // Actualizar una personalización existente

module.exports = router;
