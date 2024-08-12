import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlaneTop, faPhone } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service details
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus(
            "Thank you for your message! We'll get back to you soon."
          );
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("There was an error. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-text">
        <h2>
          Contact<span>Me</span>
        </h2>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          minus id unde iste.
        </p> */}
        <div className="contact-list">
          <li className="list1">
            <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            shubhadakunde8@gmail.com
          </li>
          <li className="list2">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            9370798818
          </li>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            // aria-label="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            // aria-label="Name"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Your Subject"
            // aria-label="Subject"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols={40}
            rows={10}
            placeholder="Enter Your Message"
            required
            aria-label="Message"
          />
          <input type="submit" value="Send" className="send" />
        </form>
        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </div>
    </section>
  );
};

export default Contact;
