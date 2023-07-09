import Nav from 'react-bootstrap/Nav';
import './clinic.css';
import React, { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const handleCall = () => {
    window.location.href = 'tel:+917721099005'; // Replace with your phone number
  };

  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`scrolling-component ${isVisible ? 'visible' : ''}`} ref={componentRef}>
      <div className='contact-section'>
        <div className='contact-box'>
          <h3 className='contact-title'>Contact</h3>
          <button className='call-button' onClick={handleCall}>CALL NOW</button>
          <h6 className='contact-info'>7721099005</h6>
        </div>
        <div className='contact-box'>
          <h3 className='contact-title'>Address</h3>
          <button className='location-button'>
            <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8">LOCATION</Nav.Link>
          </button>
          <h6 className='contact-info'>
            Physical Therapy Clinic in Bangalore,
            <br />
            Karnataka 560037
            <br />
            610 second floor, AECS Layout-C Block
          </h6>
        </div>
        <div className='contact-box'>
          <h4 className='contact-title'>Timings</h4>
          <h6 className='contact-info'>
            Monday to Saturday
            <br />
            Morning - 9:30 to 12:30
            <br />
            Evening - 5:30 to 8:30
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
