import React, { useState, useRef } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const nameInputRef = useRef(null); // 🔥 Focus back on name field after submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatusMessage("⚠️ Please fill out all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatusMessage("⚠️ Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("⏳ Sending message...");

    try {
      // Simulated backend call (Replace with actual backend API)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form Submitted", formData);
      setStatusMessage("✅ Message sent successfully!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      nameInputRef.current.focus(); // 🔥 Focus back on name field
    } catch (error) {
      setStatusMessage("❌ Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameInputRef}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          aria-label="Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          aria-label="Message"
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <p className="status-message" aria-live="polite">
        {statusMessage}
      </p>{" "}
      {/* 🔥 Live updates */}
    </div>
  );
};

export default ContactPage;
