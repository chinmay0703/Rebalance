import React from 'react';
import './clinic.css';
import im from './images/hshs.jpg';
import { Link } from 'react-router-dom';

const Imagecolumn = () => {


  return (
    <div className='container-fluid'>
      <div className='row'>

        <div className='col-sm-12 col-md-6 col-lg-6'>
          <img
            src={im}
            className='image-fluid'
            style={{ width: '100%', height: '100%' }}
            alt='clinic'
          ></img>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 my-4">
          <div class="card " style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "100%", height: "100%" }}>
            <h1 class="display text-center card-title my-3">Our expertise</h1>
            {/* <h3>The physiotherapy treatments on offer at Rebalance include but are not limited to:</h3> */}
            <ul class="list-group card-body">
              <li class="list-group-item mx-1">1) Spinal Injuries (Disc, Muscles)</li>
              <li class="list-group-item mx-1">2) Sports Injuries</li>
              <li class="list-group-item mx-1">3) Postural related Injuries</li>
              <li class="list-group-item mx-1">4) Post Surgery Rehabilitation (Hip/Knee replacement, ACL repair etc)</li>
              <li class="list-group-item mx-1">5) Neurological Rehab (Stroke, MS, Parkinsons)</li>
              <li class="list-group-item mx-1">6) Manual Therapy</li>
              <li class="list-group-item mx-1" >7) Specialized late-stage rehab programs</li>
              <li class="list-group-item mx-1">8) Strength and power testing for return to play</li>
              <li class="list-group-item mx-1">9) Individually tailored return to play programs</li>
              <li class="list-group-item mx-1">10) Women's Health</li>
            </ul>
            <Link to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore/calendar"} >    <button class="btn btn-primary my-4 mx-5">Appointments</button></Link>
          </div>
        </div>

      </div>



    </div>
  );
};

export default Imagecolumn;
