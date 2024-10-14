import express from 'express';
import { createUser, getUser, authMiddleware, getCurrentUserMeshcapadeId } from '../controllers/userController.js';

const router = express.Router();

// Ruta para usuarios
router.post('/', createUser); // Crear un nuevo usuario
router.get('/:id', getUser);   // Obtener un usuario por su ID
router.get('/current', authMiddleware, getCurrentUserMeshcapadeId); // Protected route to get current user's Meshcapade userId

export default router;
