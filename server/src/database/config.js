import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database!");
  } catch (error) {
    console.log("error connecting to database:" + error.message);
    process.exit(1);
  }
};

export { connectDB };
