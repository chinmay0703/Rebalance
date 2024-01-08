import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Element, scroller, animateScroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Services from './components/Services';
import DropdawnQuestions from './components/DropdawnQuestions';
import Advanced from './components/Carousel';
import Clinic from './components/Clinic';
import Contact from './components/Contact';
import Bhariheading from './components/Bhariheading';
// import Tagline from './components/Tagline';
import ImageGallery from './components/ImageGallery';
import Map from './components/Map';
import ChatBot from './components/ChatBox';
import Aboutus from './components/Aboutus';
// import Review from './components/Review';
import pic from './components/images/photw.jpg';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<Aboutt></Aboutt>} />
        </Routes>
        <Element name="contact" />
      </div>
    </Router>
  );
}
function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHomeClick = () => {
    if (!isScrolledToTop) {
      animateScroll.scrollToTop({
        duration: 800,
        smooth: true,
        onEnd: () => setIsScrolledToTop(true),
      });
      setIsScrolledToTop(false);
    } else {
      // If already scrolled to top, refresh the page
      window.location.reload();
    }
  };

  const checkScrollPosition = () => {
    setIsScrolledToTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    checkScrollPosition(); // Check initial scroll position
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      smooth: true,
    });
  };


  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      smooth: true,

    });
  };



  const open = () => {
    window.location.assign('/gallery');
  };

  return (
    <div>
      <header className='sticky-header'>
       
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: " #e3f2fd" }}>
          <div class="container-fluid">
            <img
              className='img-fluid '
              src={pic}
              alt="Your_image"
              style={{ width: "120px" }}
              onClick={scrollToTop}
            />
            <button class="navbar-toggler" style={{border:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <b> <a class="nav-link active" aria-current="page" href="/" onClick={scrollToTop}>Home</a></b>
                </li>
                <li class="nav-item">
                  <b> <a class="nav-link active" aria-current="page" href="/gallery">Gallery</a></b>
                </li>
                <li class="nav-item">
                  <b> <a class="nav-link active" aria-current="page" href="/aboutus" onClick={scrollToTop} >AboutUs</a></b>
                </li>
                <li class="nav-item">
                  <b> <a class="nav-link active" aria-current="page" href="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8">Location</a></b>
                </li>
                <li class="nav-item">
                <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
      {/* <Bhariheading /> */}
      {/* <br></br> */}
      <Clinic/>
      <ChatBot />

      {/* <Tagline /> */}
      <Advanced />
      <br></br>
      <br></br>

      <br></br>

      {/* <H /> */}
      <Services />
      <Map />
      <DropdawnQuestions
      />
      {/* <Review></Review> */}
      <Contact />
      <br></br>
    </div>
  );
}
function Gallery() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      smooth: true,
    });
  };
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      smooth: true,

    });
  };


  return (
    <div>
      <header className='sticky-header'>
      <header className='sticky-header'>
       
       <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: " #e3f2fd" }}>
         <div class="container-fluid">
           <img
             className='img-fluid '
             src={pic}
             alt="Your_image"
             style={{ width: "120px" }}
             onClick={scrollToTop}
           />
           <button class="navbar-toggler" style={{border:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <b> <a class="nav-link active" aria-current="page" href="/" onClick={scrollToTop}>Home</a></b>
               </li>
               
               <li class="nav-item">
                 <b> <a class="nav-link active" aria-current="page" href="/aboutus" onClick={scrollToTop} >AboutUs</a></b>
               </li>
               <li class="nav-item">
                 <b> <a class="nav-link active" aria-current="page" href="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8">Location</a></b>
               </li>
               <li class="nav-item">
               <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link>
               </li>
             </ul>

           </div>
         </div>
       </nav>
     </header>
      </header>
     
      <Clinic />
      {/* <Tagline /> */}
      <br></br>
      <br></br>
      <ImageGallery></ImageGallery>
      <Map />
      <br></br>
      <Contact />
      <ChatBot />
      <br></br>
    </div>
  );
}
function Aboutt() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToContact = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      smooth: true,
    });
  };
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      smooth: true,

    });
  };



  return (
    <div>
      <header className='sticky-header'>
       
       <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: " #e3f2fd" }}>
         <div class="container-fluid">
           <img
             className='img-fluid '
             src={pic}
             alt="Your_image"
             style={{ width: "120px" }}
             onClick={scrollToTop}
           />
           <button class="navbar-toggler" style={{border:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <b> <a class="nav-link active" aria-current="page" href="/" onClick={scrollToTop}>Home</a></b>
               </li>
               <li class="nav-item">
                 <b> <a class="nav-link active" aria-current="page" href="/gallery">Gallery</a></b>
               </li>
            
               <li class="nav-item">
                 <b> <a class="nav-link active" aria-current="page" href="https://maps.app.goo.gl/5NPMoY3nmSbquKcg8">Location</a></b>
               </li>
               <li class="nav-item">
               <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link>
               </li>
             </ul>

           </div>
         </div>
       </nav>
     </header>
      
      <Clinic />
      {/* <Tagline /> */}
      <br></br>
      <br></br>
      {/* <br></br>
        <br></br> */}
      <div className="about-us">
        <center> <h1 className="animated-heading"><b>About Us</b></h1></center>
        {/* Add the rest of your content here */}
      </div>
      <br></br>
      <Aboutus ></Aboutus>
      <br></br>
      <Map></Map>
      <br></br>
      <Contact />
      <ChatBot />

      <br></br>
    </div>
  );
}
export default App;

