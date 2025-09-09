import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import blogRoutes from "./routes/blogRoutes";

const app = express();

// Frontend origin from env (default: localhost:8080 per current Vite config)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:8080";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/blogs", blogRoutes);


// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

export default app;