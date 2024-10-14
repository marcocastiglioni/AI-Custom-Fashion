import Customization from '../models/Customization.js';

// Crear una nueva personalización
const createCustomization = async (req, res, next) => {
  try {
    const { userId, shirtColor, shirtStyle } = req.body;  // Verifica los datos que recibes
    const newCustomization = new Customization({ userId, shirtColor, shirtStyle });

    await newCustomization.save(); // Guardar la personalización en MongoDB

    res.status(201).json(newCustomization); // Respuesta exitosa
  } catch (error) {
    console.error('[Controller] Error al guardar la personalización:', error);  // Muestra el error en la consola del servidor
    // res.status(500).json({ message: '[Controller] Error al crear la personalización', error }); // Respuesta de error
    next(error);  // Pasar el error al middleware de manejo de errores
  }
};

// Obtener una personalización por su ID
const getCustomizationById = async (req, res) => {
  try {
    const customization = await Customization.findById(req.params.id);
    if (!customization) {
      return res.status(404).json({ message: 'Personalización no encontrada' });
    }
    res.status(200).json(customization);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la personalización', error });
  }
};

// Obtener todas las personalizaciones de un usuario específico
const getCustomizationsByUser = async (req, res) => {
  try {
    const customizations = await Customization.find({ userId: req.params.userId });
    if (customizations.length === 0) {
      return res.status(404).json({ message: 'No se encontraron personalizaciones para este usuario' });
    }
    res.status(200).json(customizations);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las personalizaciones del usuario', error });
  }
};

// Actualizar una personalización existente
const updateCustomization = async (req, res) => {
  try {
    const customization = await Customization.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!customization) {
      return res.status(404).json({ message: 'Personalización no encontrada' });
    }
    res.status(200).json(customization);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la personalización', error });
  }
};

export {
  createCustomization,
  getCustomizationById,
  getCustomizationsByUser,
  updateCustomization
}