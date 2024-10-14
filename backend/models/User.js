import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true, // Elimina espacios en blanco
  },
  email: {
    type: String,
    required: true,
    unique: true, // Garantiza que el correo sea único
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Requiere una contraseña de al menos 6 caracteres
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Define los roles posibles
    default: 'user', // El valor por defecto es "user"
  },
  measurements: {
    height: Number,
    chest: Number,
    waist: Number,
    hips: Number
  },
  meshcapadeUserId: {
    type: String,
    required: false, // Initially undefined until created
  }
}, { timestamps: true });

// Función para encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    return next(err);
  }
});

// Método para verificar la contraseña
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

// Exportar el modelo como default
export default User;

