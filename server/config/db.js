import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fame_estate';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2000
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Warning] Local DB connection skipped or offline (${error.message}). Server will use mock in-memory data for demo APIs.`);
  }
};
