const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  measurements: {
    height: Number,
    chest: Number,
    waist: Number,
    hips: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
