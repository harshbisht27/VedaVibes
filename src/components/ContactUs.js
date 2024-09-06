import React from "react";
// import './ContactUs.css'; // Importing CSS for the footer

const ContactUs = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: info@vedavibes.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Ayurveda Street, Delhi, India</p>
        </div>
        <div className="credits">
          <p>© 2024 Veda Vibes. All Rights Reserved.</p>
          <p>Made with ❤️ by Harsh, Kartik, Kashish, Arjav, Arnav, and Mishi</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
