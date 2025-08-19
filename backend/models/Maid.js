import mongoose from 'mongoose';

const maidSchema = new mongoose.Schema({
  name: { type: String, required: true },
  experience: Number,
  contact: String,
  availability: String,
  services: String,
  rate: Number,
});

export default mongoose.models.Maid || mongoose.model('Maid', maidSchema);
