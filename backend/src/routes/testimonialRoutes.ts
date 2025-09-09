import { Router } from "express";
import Testimonial from "../models/Testimonial";

const router = Router();

router.get("/", async (_req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
});

export default router;
