import React ,{useState}from 'react';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import {Element, scroller, animateScroll } from 'react-scroll'; // Import from react-scroll
import Container from 'react-bootstrap/Container';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from './components/Services';
import BasicExample from './components/BasicExample';
import Advanced from './components/Advanced';
import Clinic from './components/Clinic';
import Contact from './components/Contact';
import Bhariheading from './components/Bhariheading';
import Tagline from './components/Tagline';
import ImageGallery from './components/ImageGallery';
import Map from './components/Map';
import './App.css';
import ChatBot from './components/ChatBox';
// import H from './components/H';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/gallery" element={<Gallery/>} /> 
          <Route path="/aboutus" element={<Aboutt></Aboutt>}/> 
        </Routes>
        <Element name="contact" /> 
      </div>
    </Router>
  );
}
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
function Home() {
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
  
  return (
    <div>
      <header className='sticky-header'>
        <Navbar className="navbar-with-shadow" bg="light" expand="lg">
          <Container className='ret'>
            <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Rebalance</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={isMobileMenuOpen ? 'slide-in' : ''}
            >
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" onClick={scrollToTop}><b>Home</b></Nav.Link>
                <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8"><b>Location</b></Nav.Link>
                <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link>
                <Nav.Link as={Link} to="/aboutus"><b>About</b></Nav.Link>
                <Nav.Link as={Link} to="/gallery"><b>Gallery</b></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Bhariheading />
      <br></br>
      <Clinic />
      <ChatBot />
      <Tagline />
      <Advanced />
      <br></br>
      <br></br>
     <center> <div className='btn btn-primary' onClick={open}> Open-gallery</div>
     </center>
     <br></br>
     
      {/* <H /> */}
      <Services />
      <Map />
      <BasicExample />
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

  
  return (
    <div>
       <header className='sticky-header'>   
       <Navbar className="navbar-with-shadow" bg="light" expand="lg" fixed="top">
            <Container className='ret'>
              <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Rebalance</Navbar.Brand>
              <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={isMobileMenuOpen ? 'slide-in' : ''}
            >
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={scrollToTop}><b>Home</b></Nav.Link> {/* Use onClick event to scroll to top */}
                  <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8"><b>Location</b></Nav.Link>
                  <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link> {/* Use onClick event to scroll to Contact */}
                </Nav>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
        </header>
        <br></br>
        <br></br>
        <Bhariheading />
      <br></br>
      <Clinic />
      <Tagline />
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

  
  
  
  return (
    <div>
       <header className='sticky-header'>   
       <Navbar className="navbar-with-shadow" bg="light" expand="lg" fixed="top">
            <Container className='ret'>
              <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Rebalance</Navbar.Brand>
              <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleMobileMenu}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={isMobileMenuOpen ? 'slide-in' : ''}
            >
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={scrollToTop}><b>Home</b></Nav.Link> {/* Use onClick event to scroll to top */}
                  <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8"><b>Location</b></Nav.Link>
                  <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link> {/* Use onClick event to scroll to Contact */}
                  <Nav.Link   as={Link} to="/gallery"><b>Gallery</b></Nav.Link>
                </Nav>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
        </header>
        <br></br>
        <br></br>
        <Bhariheading />
      <br></br>
      <Clinic />
      <Tagline />
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

