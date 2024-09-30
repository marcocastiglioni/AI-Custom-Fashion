import express from 'express';
import { createUser, getUser } from '../controllers/userController.js';

const router = express.Router();

// Ruta para usuarios
router.post('/', createUser); // Crear un nuevo usuario
router.get('/:id', getUser);   // Obtener un usuario por su ID

export default router;
