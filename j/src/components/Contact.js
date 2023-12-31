import Nav from 'react-bootstrap/Nav';
import './clinic.css';
import "./contact.css"
import pic from "./images/phot.jpg"
import React, { useRef, useEffect, useState } from 'react';
const Contact = () => {
  // const handleCall = () => {
  //   window.location.href = 'tel:+917721099005';
  // };
  // const componentRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //       } else {
  //         setIsVisible(false);
  //       }
  //     });
  //   });
  //   observer.observe(componentRef.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    // <div classNameName={`scrolling-component ${isVisible ? 'visible' : ''}`} ref={componentRef}>
    //   <div classNameName='contact-section'>
    //     <div classNameName='contact-box'>
    //       <h3 classNameName='contact-title'>Contact</h3>
    //       <button classNameName='call-button' onClick={handleCall}>CALL NOW</button>
    //       <h6 classNameName='contact-info'>7721099005</h6>
    //     </div>
    //     <div classNameName='contact-box'>
    //       <h3 classNameName='contact-title'>Address</h3>
    //       <button classNameName='location-button'>
    //         <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8">LOCATION</Nav.Link>
    //       </button>
    //       <h6 classNameName='contact-info'>
    //         Physical Therapy Clinic in Bangalore,
    //         <br />
    //         610, 2nd floor, AECS Layout - C Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037
    //       </h6>
    //     </div>
    //     <div classNameName='contact-box'>
    //       <h4 classNameName='contact-title'>Timings</h4>
    //       <br></br>
    //       <h6 classNameName='contact-info'>
    //         Monday to Saturday
    //         <br/>
    //         Morning - 9:30 to 12:30
    //         <br/>
    //         Evening - 5:30 to 8:30
    //       </h6>
    //     </div>
    //   </div>
    // </div>
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              {/* <div className="col-xl-5 col-md-5 mb-30">
                <div className="single-cta">
                  <a href='https://maps.app.goo.gl/5NPMoY3nmSbquKcg8'>  <i className="fas fa-map-marker-alt"></i></a>
                  <div className="cta-text">
                    <h4 className='mx-2'>Find us</h4>
                    <span className='mx-1'>610, 2nd floor, AECS Layout C Block <br></br> AECS Layout Whitefield, Bangalore</span>

                  </div>
                </div>
              </div> */}
              {/* <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <div className="cta-text">
                    <i className="fas fa-map-marker-alt" style={{ verticalAlign: 'middle' }}></i>
                    <h4 style={{ display: 'inline-block', marginLeft: '10px' }}>Find us</h4>
                    <span style={{ display: 'block', marginTop: '5px' }}>610, 2nd floor, AECS Layout - C Block, AECS Layout, Brookefield, Bengaluru, Karnataka 560037</span>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-5 col-md-5 mb-30 ">
                <div className="single-cta">
                  <div className='col-2'>
                    <i className="fas fa-map-marker-alt my-3"></i>
                  </div>
                  <div className="cta-text">
                    <div className='col'>
                      <h4 className='mx-1'>Find us</h4>
                      <span className=''>610, 2nd floor, AECS Layout - C Block, </span><br></br><span className='mx-'>AECS Layout, Brookefield,</span>
                      <br></br><span>Bengaluru, Karnataka 560037</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-3 mb-30 ">
                <div className="single-cta">
                  <div className='col-1'>
                    <i className="fas fa-phone my-3"></i>
                  </div>
                  <div className="cta-text">
                    <div className='col-9'>
                      <h4>Call us</h4>
                      <span>+7721099005</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-1'></div>
              <div className="col-xl-2 col-md-2 mb-30">
                <div className="single-cta">
                  <div className='col-6'>
                    <i className="far fa-envelope-open my-3"></i>
                  </div>
                  <div className="cta-text">
                    <div className='col-6'>
                      <h4>Mail us</h4>
                      <span>rebalance@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"><img src={pic} className="img-fluid" alt="logo" /></a>
                  </div>
                  <div className="footer-text">
                    <p>Welcome to ReBalance physiotherapy clinic - your path to optimal health and wellness. Our state of the art physiotherapy clinic is dedicated to helping you restore, rejuvinate, and reclaim your body's natural balance. We provide personalized treatment plans tailored to your needs. </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g google-bg my-3"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8">Location</a></li>
                    <li><a href="#">ContactUs</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/aboutus">About us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text text-lg-left">
                  <p className=''>Copyright &copy; 2023, All Right Reserved</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8">Location</a></li>
                    <li><a href="#">ContactUs</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/aboutus">About us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Contact;


