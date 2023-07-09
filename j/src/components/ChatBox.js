import React from 'react';
import './clinic.css'; // Import the CSS file for styling
import watt from './images/wat.jpg';

function ChatBot() {
  const recipientNumber = '+917721099005'; // Replace with your desired phone number

  const openWhatsApp = () => {
    const message = 'Hello,Dr. Vaishnavi I have a question'; // Replace with your desired message
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${recipientNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-icon" onClick={openWhatsApp}>
        <img src={watt} alt="WhatsApp Logo" className="whatsapp-logo" />
    
      </div>
    </div>
  );
}

export default ChatBot;
