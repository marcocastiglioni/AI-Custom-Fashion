const express = require('express');
const { 
    createUser, 
    getUser 
} = require('../controllers/userController');

const router = express.Router();

// Ruta para usuarios
router.post('/', createUser); // Crear un nuevo usuario
router.get('/:id', getUser);   // Obtener un usuario por su ID

module.exports = router;
