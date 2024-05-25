import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
          "service_k2qawqh",
          "template_c6rkpn6",
          formRef.current,
          "X7K7ebhIeOy3YwHki"
      );
      console.log(result.text);
      setMessage(true);
    } catch (error) {
      console.log(error.text);
    }
    e.target.reset();
  };

  return (
      <section id="contact">
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>mardan.kussaiyn@narxoz.kz</h5>
              <a href="mailto:mardan.kussaiyn@narxoz.kz">Send a message</a>
            </article>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Full Name"
                name="user_name"
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
            />
            <textarea
                placeholder="Your message"
                rows="7"
                name="message"
                required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && <span>Thanks, I'll reply as soon as possible^^</span>}
          </form>
        </div>
      </section>
  );
};

export default Contact;
