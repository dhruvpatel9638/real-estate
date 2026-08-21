import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  titleHtml: { type: String, required: true },
  titlePlain: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

export const Service = mongoose.model('Service', serviceSchema);
