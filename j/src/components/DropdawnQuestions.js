import './clinic.css';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useRef, useEffect, useState } from 'react';
import review1 from "../components/images/review1.png"
import review2 from "../components/images/review2.png"
import review3 from "../components/images/review3.png"
import "../components/Drop.css";
const DropdawnQuestions = () => {
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
    <div>
      <div className={`scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Why is Physiotherapy important?
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-center"> {/* Add text-center class */}
            <Dropdown.ItemText className="middddddd">Post-surgery rehabilitation, Reduce or eliminate pain, Recover and prevent sports injuries, Pregnancy and post-partum care and Neuro cases rehabilitation.</Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <h3> </h3>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            How long does a physiotherapy session last?
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-center"> {/* Add text-center class */}
            <Dropdown.ItemText className="middddddd">The initial session that includes history taking, examination and diagnosis usually takes around 45 minutes. Following that, the physiotherapy sessions can be around 35-45 minutes.</Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <h3> </h3>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            How do I schedule an appointment?
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-center"> {/* Add text-center class */}
            <Dropdown.ItemText className="middddddd">You can book an appointment with us by contacting us at +917721099005.</Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <br></br>
      </div>
      <div>
        <div className='c'>

          <h1 className='text-center fancy-heading'>
            Our Reviews
          </h1>


        </div>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
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
        </div>
      </div>

    </div>
  );
};

export default DropdawnQuestions;
