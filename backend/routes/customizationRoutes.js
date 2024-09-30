import express from 'express';
import { createCustomization, getCustomizationById, getCustomizationsByUser, updateCustomization } from '../controllers/customizationController.js'

const router = express.Router();

// Ruta para personalizaciones
router.post('/', createCustomization);
router.get('/:id', getCustomizationById); // Obtener una personalización por su ID
router.get('/user/:userId', getCustomizationsByUser); // Obtener todas las personalizaciones de un usuario específico
router.put('/:id', updateCustomization); // Actualizar una personalización existente

export default router;
