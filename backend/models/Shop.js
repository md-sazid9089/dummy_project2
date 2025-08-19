import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  type: String,
  location: String,
  contact: String,
  hours: String,
});

export default mongoose.models.Shop || mongoose.model('Shop', shopSchema);
