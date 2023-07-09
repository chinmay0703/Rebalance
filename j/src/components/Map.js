
import React from 'react';
import './clinic.css';
import mapp from './images/map.jpg';
const Map = () => {
    const handleClick = () => {
      window.open('https://goo.gl/maps/5kjjRq2Gz4bw7iQY8'); // Replace 'https://example.com' with your desired URL
    };
  
    return (
      <div className='c'>
         {/* <center><h5 className='b'></h5></center>  */}
       <center> <h5 className='bu'>CONTACT US</h5></center> 
        <img src={mapp} alt="I" className='res' onClick={handleClick} />
        <br></br>
      </div>
    );
  };
  


export default Map;



