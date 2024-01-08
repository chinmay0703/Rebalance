import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import "../components/review.css";
import pic1 from "../components/images/IMG-20240108-WA0000.jpg";
import pic2 from "../components/images/IMG-20240108-WA0001.jpg";
import pic3 from "../components/images/IMG-20240108-WA0002.jpg";
// import pic4 from "../components/images/IMG-20240108-WA0003.jpg";
// import pic5 from "../components/images/IMG-20240108-WA0004.jpg";
// import pic6 from "../components/images/IMG-20240108-WA0005.jpg";
// import pic7 from "../components/images/IMG-20240108-WA0006.jpg";
import pic8 from "../components/images/IMG-20240108-WA0007.jpg";
import pic9 from "../components/images/IMG-20240108-WA0008.jpg";
import pic10 from "../components/images/IMG-20240108-WA0009.jpg";
import { Link } from 'react-router-dom';

function ReviewSlider() {
    const images = [pic1, pic2, pic3, pic8, pic9, pic10];

    return (
        <div style={{ padding: '20px' }} className='colorga'>
            <div style={{ textAlign: 'center' }}>
                <h3 className='text-center text-black' style={{ color: 'black' }}>What Our Patients Say</h3>
                <p className='text-center text-black'>Rated 5.0 stars by our customers on Google</p>
                <hr style={{ width: '50px', borderTop: '3px solid', margin: 'auto', marginBottom: '20px' }}  className='whitee'/>
                <Carousel interval={2000}>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block mx-auto my-6"
                                style={{
                                    width: '300px', // Set a fixed width
                                    height: '200px', // Set a fixed height
                                    objectFit: 'cover', // Maintain aspect ratio and cover the container
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)', // Adjust the shadow
                                    filter: 'brightness(110%)', // Adjust the brightness
                                    border: 'none', // Remove border
                                }}
                                src={image}
                                alt={`Slide ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
               <Link to={"https://www.eka.care/doctor/vaishnavi-tammewar-orthopedic-surgeon-bangalore/calendar"}> <button className='btn btn-primary'>GET CONSULTATION NOW</button></Link>
            </div>
        </div>
    );
}

export default ReviewSlider;
