import './clinic.css';
import React, { useRef, useEffect, useState } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
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
    'Physiotherapy',
    'Orthopedic Checkup',
    'Pregnancy Massage',
    'Osteopath Treatment',
    'Sports Injury',
    'Back Pain Relief',
    'Home Workouts',
    'Rehabilitation'
  ];

  // Chunk the images, titles, and descriptions into groups of 1 for small screens and 3 for large screens
  const chunkedItems = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push({
      image: item,
      title: titles[index],
      // description: descriptions[index]
    });

    return resultArray;
  }, []);

  return (
    <div className={`scrolling-componentty ${isVisible ? 'visible' : ''}`} ref={componentRef}>
      <h3>Multiple Treatment We Provide</h3>
      <Carousel interval={4000} className="mx-6">
        {chunkedItems.map((chunk, index) => (
          <Carousel.Item key={index} className="py-1">
            <Row>
              {chunk.map(({ image, title, description }, subIndex) => (
                <Col key={subIndex} sm={12} md={4} lg={4} className='my-3'>
                  <Card className="faint-gray-card">
                    <Card.Img variant="top" src={image} className="img-fluid" alt={`Image ${index * 3 + subIndex + 1}`} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="text-center mb-3">{title}</Card.Title>
                        <Card.Text className=''>

                          <Link to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore/calendar"}>
                            <p className="text-center">Consult Now →</p>
                          </Link>
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ padding: '10px', textAlign: 'center' }} className='colorga ' >
        <h1 className='text-center colorrr my-3 upper'><b>Take a step towards rebalancing your body</b></h1><br></br>
       
      </div>
    </div>
  );
};

export default Advanced;
