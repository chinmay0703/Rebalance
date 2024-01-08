import React from 'react';
import './about.css';
import f1 from './images/f.jpg';
import f2 from './images/laggu.jpg';

const Aboutus = () => {
  return (
    <div className='abo-container'>
      {/* First row with nebo and texa */}
      <div className='row-container'>
        <div className='nebo'>
          <img className="ima" src={f1} alt='ty' />
        </div>
        <div className='texa'>
          <p>
            <h2><b>About Our Clinic</b></h2>
            Established in 2023, Rebalance located in Bangalore. Our physiotherapists are dedicated to providing hands-on, research-driven physiotherapy treatments unique to your condition and pain.
            <br /><br />
            Our philosophy emphasizes that our patients get better education, more comprehensive manual treatments, and skilled exercise instruction. Our physical therapists take the time to treat each patient and develop a plan for sustainable outcomes to reach the patient’s goals and achieve a new level of performance!
            <br /><br />
            We believe that any treatment is complete only when it is delivered with utmost care and passion. At Rebalance, we have that in abundance. Our goal at Rebalance is to make patients move back to the life you enjoyed doing best before your pain.
          </p>
        </div>
      </div>

      {/* Second row with nandu and bhide */}
      <div className='row-container'>
        <div className='nandu'>
          <img className="ima" src={f2} alt='ty' />
        </div>
        <div className='bhide'>
          <h2><b>About Me - Dr. Vaishnavi Tammewar</b></h2>
          <p>
            I take pride in being able to continuously upgrade my practice to meet the changing demands of healthcare and the Physio profession. Rebalance continuously upgrades too, with the latest equipment and modern gym.
            <br /><br />
            <b> In my experience, there are 3 things that are very important:</b>
            <br />
            1. A proper diagnosis: A proper diagnosis is always the key. It’s like a Google map, once we know where to head to, the journey of rehab and recovery is in the proper direction. Else, it’s a vicious cycle of pain and misguided treatment.
            <br />
            2. The patient’s understanding of their diagnosis: The patient’s recovery begins with proper education and understanding of their problem. Understanding there’s no magic pill and feeling better the next day, but it's about treating the underlying cause and the pathology behind the cause.
            <br />
            3. The physio’s care for recovery: Finally, the physio should also understand that the patient is going not only through physical stress but also the emotional stress of an injury and provide proper care for recovery. Factoring this into therapy is key for success!
            <br /><br />
            <b> My Experience:</b>
            <br />
            - Completed Physiotherapy graduation from MUHS, Maharashtra.
            <br />
            - Have six years of clinical work experience.
            <br />
            - Completed an intense internship program for advanced physiotherapy and sports injury management at HPE UK under Dr. Swapnil Mate.
            <br />
            - Certified practitioner for dry needling, cupping, MFR, IASTM, and kinesio-taping.
            <br />
            - Aerobics and Pilates instructor.
            <br />
            - Good at handling musculoskeletal conditions.
          </p>
        </div>
      </div>

      {/* Welcome message */}
      <div className='welcome-message'>
        <p>
          <h1> we welcome the chance to serve you.</h1></p>
        Any problem caused by a sport, work accident, etc., <br></br>
      </div>
    </div>
  );
};

export default Aboutus;
