import mongoose from 'mongoose';

const housingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rent: Number,
  location: String,
  contact: String,
  description: String,
  images: [String],
});

export default mongoose.models.Housing || mongoose.model('Housing', housingSchema);
