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

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const titles = [
    'Pain management',
    'Orthopedic Checkup',
    'Womens Health  ',
    'Osteopath Treatment',
    'Sports Injury',
    'Back Pain Relief',
    'Home Workouts',
    'Rehabilitation'
  ];

  const items = images.map((image, index) => ({
    image,
    title: titles[index],
  }));

  return (
    <div className={` hgh scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef}>
      <></>
      <h3 className='poppins-bold my-4'>Multiple Treatment We Provide</h3>
      {/* <hr></hr> */}
      <div className="d-flex justify-content-center align-items-center vh-10 py-4" style={{ backgroundColor: '#eee' }}>
        <Carousel interval={3000} className="mx-6 " style={{ borderRadius: '20px' }}>
          {items.map((item, index) => (
            <Carousel.Item key={index} className="">
              <Card className="p-4" style={{ backgroundColor: 'white' }}>
                <Card.Img variant="top" src={item.image} style={{ borderRadius: '10px' }} className="img-fluid" alt={`Image ${index + 1}`} />
                <Card.Body className="py-3 d-flex flex-column justify-content-between flex col-12">
                  <div className='my-1'>
                    <Card.Title className="text-center poppins-semibold">{item.title}</Card.Title>
                    <Card.Text className='' >
                      <Link to={"https://www.eka.care/doctor/dr-vaishnavi-tammewar-physiotherapist-bangalore"}>
                        <button className="col-12 text-center btn btn-outline-secondary">Consult Now →</button>
                      </Link>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* <hr></hr> */}
      <div className='upper my-4'>
        <div style={{ padding: '1px', textAlign: 'center', backgroundImage: 'linear-gradient(to right,##f0f2f7;, #f0f0f0)' }} className='colorga'>
          <br></br>
          <b><h3 className='dow text-black'>Take a step towards rebalancing your body.</h3></b>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
