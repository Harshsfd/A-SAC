import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: String,
  feedback: String
});

export default mongoose.model("Testimonial", testimonialSchema);
