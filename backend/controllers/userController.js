import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Crear un nuevo usuario
const createUser = async (req, res) => {
  console.log('[User Controller] Create User');
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// Obtener un usuario por ID
const getUser = async (req, res) => {
  console.log('[User Controller] Get User');
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};

const authMiddleware = async (req, res, next) => {
  console.log('[User Controller] Auth Middleware');
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: '[User Controller] No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

const getCurrentUserMeshcapadeId = (req, res) => {
  console.log('[User Controller] Get Curret User Meshcapade ID');
  const { _id, username, email, meshcapadeUserId } = req.user;
  
  if (!meshcapadeUserId) {
    return res.status(404).json({ error: '[User Controller] Meshcapade userId not found' });
  }
  
  res.status(200).json({ user: { id: _id, username, email, meshcapadeUserId } });
  // res.status(200).json({ meshcapadeUserId });
};  

export {
  createUser,
  getUser,
  authMiddleware,
  getCurrentUserMeshcapadeId
}