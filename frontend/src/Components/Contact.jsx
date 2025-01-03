import React, { useState } from "react";
import "../Styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage({ type: "error", text: "All fields are required." });
      clearMessageAfterDelay(); // Clear message after delay
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResponseMessage({ type: "error", text: "Please enter a valid email address." });
      clearMessageAfterDelay(); // Clear message after delay
      return false;
    }
    return true;
  };

  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setResponseMessage(null); // Clear the response message
    }, 3000); // 3 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage({ type: "success", text: "Thank you for your message. We'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage({ type: "error", text: result.error || "Something went wrong." });
      }
    } catch (error) {
      setResponseMessage({ type: "error", text: "Error: Unable to submit the form." });
    } finally {
      setIsLoading(false);
      clearMessageAfterDelay(); // Clear message after delay
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={!isFormValid || isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {responseMessage && (
          <p className={`response-message ${responseMessage.type}`}>
            {responseMessage.text}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
