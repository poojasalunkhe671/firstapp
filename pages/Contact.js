import React, { useState } from "react";
import PizzaLeft from "../../assests/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost/react_backend/savecontact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message);

      if (result.status === "success") {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Failed to send message.");
    }
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter message..." name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send Message</button>

          {responseMessage && <p className="response">{responseMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
