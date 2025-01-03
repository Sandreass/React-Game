import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <div className={styles.info}>
        <p>
          <strong>Phone:</strong> <a href="tel:+123456789">+49 800 0004760</a> (Available 24/24)
        </p>
        <p>
          <strong>Address:</strong> Vulkanstraße 2, 10367 Berlin
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:contact@gameworld.com">contact@digitalcareer.com</a>
        </p>
      </div>
      <div className={styles.socials}>
        <h2>Follow us:</h2>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
