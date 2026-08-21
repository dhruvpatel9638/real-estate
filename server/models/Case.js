import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({
  caseId: { type: String, required: true },
  counter: { type: String, required: true },
  title: { type: String, required: true },
  developer: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, default: 'Luxury Residential' }
});

export const CaseModel = mongoose.model('Case', caseSchema);
