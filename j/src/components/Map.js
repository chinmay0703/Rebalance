
import React from 'react';
import './clinic.css';
import mapp from './images/map.jpg';


const Map = () => {
    const handleClick = () => {
      window.open('https://maps.app.goo.gl/5NPMoY3nmSbquKcg8'); // Replace 'https://example.com' with your desired URL
    };
    return (
      <div className='c'>
       <center> <h5 className='bu'>CONTACT US</h5></center> 
        <img src={mapp} alt="I" className='res' onClick={handleClick} />
        
      </div>
      
    );
  };
  


export default Map;



