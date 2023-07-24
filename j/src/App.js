import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Element, scroller, animateScroll } from 'react-scroll'; // Import from react-scroll
import Container from 'react-bootstrap/Container';
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
import H from './components/H';
import Scroll from './components/Scroll';
// import Dryneedling from './components/Dryneedling';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> {/* New Route */}
          <Route path="/gallery" element={<Gallery />} /> {/* New Route */}
        </Routes>
        <Element name="contact" /> {/* Add Element component with the name "contact" */}
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
  return (
    <div>
       <header className='sticky-header'>   
          <Navbar className="navbar-with-shadow" bg="light" expand="lg">
            <Container className='ret'>
              <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Rebalance</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={scrollToTop}><b>Home</b></Nav.Link> {/* Use onClick event to scroll to top */}
                  <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8"><b>Location</b></Nav.Link>
                  <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link> {/* Use onClick event to scroll to Contact */}
                </Nav>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
        </header>
      <Bhariheading />
      <br></br>
      <Clinic />
      {/* <Video></Video> */}
      <ChatBot />
      <Tagline />
      <Advanced />
      <br></br>
      <br></br>
     <center> <div className='btn btn-primary' onClick={open}> Open-gallery</div>
     </center>
      <H />
      <Services />
      <Map />
      <BasicExample />
      <Contact />
      <br></br>
    </div>
  );
}

function Gallery() {
  return (
    <div>
       <header className='sticky-header'>   
       <Navbar className="navbar-with-shadow" bg="light" expand="lg" fixed="top">
            <Container className='ret'>
              <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Rebalance</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
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
export default App;

