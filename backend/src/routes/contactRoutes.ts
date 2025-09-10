import { Router } from "express";
import Contact from "../models/Contact";
import nodemailer from "nodemailer";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Student Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
});

    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
