const mongoose = require('mongoose');

const customizationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  shirtColor: { type: String, required: true },
  shirtStyle: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Customization', customizationSchema);
