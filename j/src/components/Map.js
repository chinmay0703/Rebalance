
import React from 'react';
import './clinic.css';
import mapp from './images/map.jpg';

const Map = () => {
    const handleClick = () => {
      window.open('https://www.google.com/maps/dir/rebalance+physiotherapy+clinic+bangalore/18.5118881,73.7830858/@13.2024688,77.3054778,10.08z/data=!4m9!4m8!1m5!1m1!1s0x3bae1325625e49d9:0xf06ea16d5911cc6d!2m2!1d77.7171932!2d12.9646641!1m1!4e1?entry=ttu'); // Replace 'https://example.com' with your desired URL
    };
  
    return (
      <div className='c'>
        
         {/* <center><h5 className='b'></h5></center>  */}
       <center> <h5 className='bu'>CONTACT US</h5></center> 
        <img src={mapp} alt="I" className='res' onClick={handleClick} />
        
      </div>
    );
  };
  


export default Map;



