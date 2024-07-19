import React, { useEffect } from 'react';
import noodel from './images/needle.jpg';
import pat from './images/patyaa.jpg';
import asd from './images/satt.jpg';
import dre from './images/manual.jpg';
import './clinic.css';
import SpecialOffer from './Grandopening';

function Services() {
  useEffect(() => {
    const contentContainers = document.querySelectorAll('.content-container');

    const handleScroll = () => {
      contentContainers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (containerTop < windowHeight) {
          container.classList.add('pop-from-below');
        }
      });
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClick = () => {
    window.location.href = "https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore";
  }
  return (
    <div className='' style={{ borderRadius: '30px', paddingTop: '0px' }}>

      {/* <SpecialOffer /> */}
      <b><h1 className='text-black  poppins-bold text-neviblur-gradient' style={{ fontWeight: '800px', textAlign: 'center', paddingLeft: '5px', paddingRight: '5px' }} >Take a step towards rebalancing your body.</h1></b>

      <div className=''>
        <div style={{ padding: '5px', borderRadius: '10px', textAlign: 'center' }}>
        </div>
      </div>
      <hr></hr>
      {/* <br /> */}
      <div className='content-container'>
        <div className='text-container '>
          <h4 className='s1'>1) Dry needling</h4>
          <h7 className="poppins-light my-3 " >
            It is easy to think of it as a western type of acupuncture, where
            the treating physiotherapist uses needling alongside their
            anatomical knowledge and clinical reasoning  <a className='' href="https://my.clevelandclinic.org/health/treatments/16542-dry-needling">Read more...</a>
          </h7>
          <button onClick={handleClick} className='fancy-btn  px-3 py-2 my-3'>
            Book now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className='image-container' style={{ borderRadius: '30px' }}>
          <img src={noodel} alt='pht' style={{ borderRadius: '30px' }} />
        </div>
      </div>

      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>2) Kinesiotaping</h4>
          <h7>
            That's kinesiology tape: a therapeutic tape that's applied
            strategically to the body to provide support, lessen pain, reduce
            swelling, and improve performance <a href="https://cbphysiotherapy.in/therapies-offered/kinesio-taping-taping-therapy">Read more...</a>
          </h7>
          <button onClick={handleClick} className='fancy-btn  px-3 py-2 my-3'>
            Book now <i className="fas fa-arrow-right"></i>
          </button>

        </div>

        <div className='image-container'>
          <img src={pat} alt='as' style={{ borderRadius: '30px' }} />
        </div>
      </div>

      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>3) Electrotherapy</h4>
          <h7>
            Electrotherapy is the application of an electric current to the
            affected area of the body to accelerate healing and reduce swelling
            and pain <a href="https://www.physio.co.uk/treatments/electrotherapy/">Read more...</a>
          </h7>
          <button onClick={handleClick} className='fancy-btn  px-3 py-2 my-3'>
            Book now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className='image-container'>
          <img src={asd} alt='asd' style={{ borderRadius: '30px' }} />
        </div>
      </div>

      <div className='content-container'>
        <div className='text-container'>
          <h4 className='s1'>4) Manual Therapy</h4>
          <h7>
            Manual therapy, also known as mobilization or manipulative therapy,
            is a form of hands-on treatment where a physiotherapist carefully
            moves the tissues and joints of the body to restore movement and
            relieve pain <a href="https://www.physio4all.com/therapies/manual-therapy/#:~:text=Manual%20therapy%20is%20a%20clinical,and%20through%20further%20postgraduate%20training.">Read more...</a>
          </h7>
          <button onClick={handleClick} className='fancy-btn  px-3 py-2 my-3'>
            Book now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className='image-container'>
          <img src={dre} alt='asdf' style={{ borderRadius: '30px' }} />
        </div>
      </div>
    </div>
  );
}

export default Services;
