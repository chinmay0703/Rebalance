
import React, { useEffect, useRef, useState } from 'react';
import './clinic.css';
import mapp from './images/map.jpg';
import { Link } from 'react-router-dom';
const Map = () => {
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
  const handleClick = () => {
    window.open('https://maps.app.goo.gl/5NPMoY3nmSbquKcg8'); // Replace 'https://example.com' with your desired URL
  };
  return (
    <div className={`scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef}>
      <div style={{ padding: '20px', textAlign: 'center' }} className='colorga ' >
        <h1 className='text-center colorrr'><b>Get Professional Physiotherapy At Your Doorstep</b></h1><br></br>
        <h5 className='text-center colo'>With Our Team Of Highly Skilled And Trained Physiotherapists</h5>
        <Link to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore/calendar"}>  <button className='btn btn-success text-center justify-content-center align-item-center my-2' >Book NOW</button></Link>
      </div>
      <div className='c'>
        <center> <h5 className='bu'>CONTACT US</h5></center>
        <img src={mapp} alt="I" className='res' onClick={handleClick} />
      </div>
    </div>
  );
};



export default Map;



