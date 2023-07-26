import React, { useState } from 'react';
import './clinic.css'; // Import the CSS file for styling
import watt from './images/45.png';

function ChatBot() {
  const recipientNumber = '+917721099005'; // Replace with your desired phone number
  const [isClicked, setIsClicked] = useState(false);

  const openWhatsApp = () => {
    setIsClicked(true);
    const message = 'Hello, Dr. Vaishnavi, I have a question'; // Replace with your desired message
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodedMessage}`;

    // Show confirmation dialog with "OK" and "Cancel" options
    const isConfirmed = window.confirm("Are you sure you want to open WhatsApp app?");
    if (isConfirmed) {
      // If user clicks "OK", open the WhatsApp URL
      window.open(whatsappURL, '_blank');
    } else {
      // If user clicks "Cancel", reset the click state
      setIsClicked(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-icon ${isClicked ? 'clicked' : ''}`} onClick={openWhatsApp}>
        <img src={watt} alt="WhatsApp Logo" className="whatsapp-logo" />
      </div>
    </div>
  );
}

export default ChatBot;
