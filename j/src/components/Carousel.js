import './clinic.css';
import React, { useRef, useEffect, useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import pic1 from "../components/images/physiotherapist-helping-young-female-patient-her-clinic.jpg";
import pic2 from "../components/images/medium-shot-doctor-checking-leg.jpg";
import pic3 from "../components/images/masseur-massaging-shoulders-pregnant-woman.jpg";
import pic4 from "../components/images/girl-receiving-cst-treatment-by-oteopath-practitioner-using-gentle-hands-technique-central-nervous-system-tension-relieve.jpg";
import pic5 from "../components/images/footballer-wearing-blue-shirt-black-pants-injured-lawn-during-race.jpg";
import pic6 from "../components/images/close-up-man-rubbing-his-painful-back-isolated-white-background.jpg";
import pic7 from "../components/images/disabled-senior-patient-working-out-home-with-resistance-band-guidance-nurse.jpg";
import pic8 from "../components/images/doctor-helping-patient-during-rehabilitation.jpg";
import pic9 from "../components/images/physiotherapist-helping-young-female-patient-her-clinic.jpg";

import { Link } from 'react-router-dom';

const Advanced = () => {
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

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
  const titles = [
    'Pain management',
    'Orthopedic Checkup',
    'Womens Health  ',
    'Osteopath Treatment',
    'Sports Injury',
    'Back Pain Relief',
    'Home Workouts',
    'Rehabilitation',
    'Home Visits'

  ];

  const items = images.map((image, index) => ({
    image,
    title: titles[index],
  }));

  return (
    <div className="" ref={componentRef}>
      <></>
      <div className='uper '>
        <div style={{ padding: '5px', borderRadius: '10px', textAlign: 'center', backgroundColor: 'white' }} className='colorga mx-4'>
          <h3 className='poppins-semibold text-neviblur-gradient py-2'>Multiple Treatment We Provide</h3>
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="d-flex justify-content-center align-items-center py-4 mx-5 my-1" style={{ backgroundColor: '#eee' }}>
        <Carousel
          interval={3000}
          className="w-70 p-4"
          prevIcon={
            <span className="custom-carousel-control-prev custom-carousel-control-prev-icon">
              <i className="fas fa-arrow-right"></i>
            </span>
          }
          nextIcon={
            <span className="custom-carousel-control-next custom-carousel-control-next-icon">
              <i className="fas fa-arrow-left"></i>
            </span>
          }
          style={{ borderRadius: '20px' }}
        >
          {items.map((item, index) => (
            <Carousel.Item key={index} className="">
              <div className="row flex justify-center">
                {items.slice(index, index + 3).map((innerItem, innerIndex) => (
                  <div key={innerIndex} className="col-lg-4 col-md-6 flex justify-center">
                    <Card className="h-auto" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                      <Card.Img variant="top" src={innerItem.image} style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} className="img-fluid" alt={`Image ${innerIndex + 1}`} />
                      <Card.Body className="py-3 d-flex flex-column justify-content-between">
                        <div className='my-1'>
                          <Card.Title className="text-center poppins-semibold py-4">{innerItem.title}</Card.Title>
                          <Card.Text className="text-center">
                            <Link to={"https://www.eka.care/doctor/dr-vaishnavi-tammewar-physiotherapist-bangalore"}>
                              {/* <button></button> */}
                            </Link>
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* <hr></hr> */}


    </div>
  );
};

export default Advanced;
