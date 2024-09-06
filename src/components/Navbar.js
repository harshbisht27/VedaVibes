import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to control the visibility of the chatbot
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  // Function to handle Dashboard click and open a new window
  const openDashboard = () => {
    window.open("https://tejasvi.gov.in/staging/embed/jjTJMBGTkROVXjoLkvWAUWBifjqqKYWKZQYYdcIvWebinfLGJhKHYYYSydAAzDzfSRrbqUFAaxQLHphlmrcqjdSnCO", '_blank');
  };

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Veda Vibes</div>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="videoSection" smooth={true} duration={500}>Video Section</Link></li>
          <li><Link to="analysis" smooth={true} duration={500}>Analysis</Link></li>
          {/* <li><a href="#" onClick={openAnyQuery}>Any Query</a></li> Opens Any Query site */}
          <li><Link to="contactUs" smooth={true} duration={500}>Contact Us</Link></li>
          <li><a href="#" onClick={openDashboard}>Dashboard</a></li> {/* Opens Dashboard in a new window */}
        </ul>
      </nav>

      {/* Button to toggle chatbot */}
      <button 
        onClick={toggleChatbot} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '80px',  // Increased size
          height: '80px', // Increased size
          backgroundColor: '#4CAF50', // Button color
          color: 'white',
          border: 'none',
          borderRadius: '50%',  // Round button
          cursor: 'pointer',
          zIndex: 1001,
          display: 'flex', // Center the text/icon inside the button
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '14px',  // Increased font size
          textAlign: 'center',
          lineHeight: '1.5' // Adjust line height for better text spacing
        }}
      >
        {isChatbotVisible ? 'X' : 'Chat with Us'}
      </button>

      {/* Chatbot iframe (conditionally rendered) */}
      {isChatbotVisible && (
        <div 
          style={{
            position: 'fixed',
            bottom: '80px',  // Position above the button
            right: '20px',   // Stick to the right side
            width: '300px',
            height: '500px',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
            borderRadius: '8px',
            zIndex: 1000,
            overflow: 'hidden' // Ensures iframe fits inside box
          }}
        >
          {/* Close button */}
          <button 
            onClick={toggleChatbot} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              color: '#333'
            }}
          >
            &times; {/* Close icon */}
          </button>

          {/* Chatbot iframe */}
          <iframe 
            src="https://app.ailifebot.com/static/standalone/standalone.html?bot_key=9c5495e32254473f&env=p" 
            title="Ailifebot Chatbot"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Navbar;
