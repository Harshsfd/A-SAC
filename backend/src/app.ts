import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import blogRoutes from "./routes/blogRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/blogs", blogRoutes);

export default app;
