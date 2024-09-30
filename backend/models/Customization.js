import mongoose from 'mongoose';

const customizationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  shirtColor: { type: String, required: true },
  shirtStyle: { type: String, required: true },
}, { timestamps: true });

const Customization = mongoose.model('Customization', customizationSchema);

// Exportar el modelo como default
export default Customization;
