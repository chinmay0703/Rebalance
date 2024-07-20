import './clinic.css';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef, useEffect, useState } from 'react';
import "../components/Drop.css";
import ReviewSlider from './ReviewSlider';
const DropdawnQuestions = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  return (
    <div >

      <div className="containe my-5 px-4" >
        <h1 className="poppins-bold mb-4 text-center">People Also Ask</h1>
        <div className="row justify-content-center" >
          <div className="col-lg-12">
            <div className="accordion accordion-flush"  id="accordionFlushExample">
              <div className="accordion-item" style={{backgroundColor:"#eee"}}>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Why is Physiotherapy important?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Post-surgery rehabilitation, Reduce or eliminate pain, Recover and prevent sports injuries, Pregnancy and post-partum care, and Neuro cases rehabilitation.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{backgroundColor:"#eee"}}>
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How long does a physiotherapy session last?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    The initial session that includes history taking, examination, and diagnosis usually takes around 45 minutes. Following that, the physiotherapy sessions can be around 35-45 minutes.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{backgroundColor:"#eee"}}>
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do I schedule an appointment?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    You can book an appointment with us by contacting us at +917721099005.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ReviewSlider></ReviewSlider>
        {/* <div className='c'>

          <h1 className='text-center fancy-heading'>
            Our Reviews
          </h1>


        </div>
        <div id="carouselExampleRide" class="carousel slide container" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={review1} class="d-block w-100" alt="Review 1" />
            </div>
            <div class="carousel-item">
              <img src={review2} class="d-block w-100" alt="Review 2" />
            </div>
            <div class="carousel-item">
              <img src={review3} class="d-block w-100" alt="Review 3" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>

    </div>
  );
};

export default DropdawnQuestions;
