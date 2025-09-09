import { Router } from "express";
import Blog from "../models/Blog";

const router = Router();

router.get("/", async (_req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

export default router;
