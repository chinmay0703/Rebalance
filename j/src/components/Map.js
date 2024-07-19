
import React, { useEffect, useRef, useState } from 'react';
import './clinic.css';
import mapp from './images/map.jpg';
import { Link } from 'react-router-dom';
// import Bhariheading from './Bhariheading';
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
    <div className={`scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef} >
      <div style={{ marginLeft: '30px', marginRight: '30px', padding: '30px', textAlign: 'center', backgroundColor: '#eee', borderRadius: '30px' }} className='colora'  >
        <h1 className='text-center  poppins-bold'><b>Get Professional Physiotherapy At Your Doorstep</b></h1><br></br>
        <h5 className='text-center colo poppins-light'>With Our Team Of Highly Skilled And Trained Physiotherapists</h5>
        <Link to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore/calendar"}>
          <button className='btn btn-success text-center justify-content-center align-item-center my-3' >Book NOW</button>
        </Link>
      </div>
      <div className='c'>
        <center><h5 className='bu'>CONTACT US</h5></center>
        <img src={mapp} alt="I" className='res' onClick={handleClick} />
      </div>
      {/* <Bhariheading></Bhariheading> */}
    </div>
  );
};



export default Map;



