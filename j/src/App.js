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

function App() {
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
    <Router>
      <div>
        <header className='sticky-header'>   
          <Navbar className="navbar-with-shadow" bg="light" expand="lg">
            <Container className='ret'>
              <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>Rebalance</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" onClick={scrollToTop}>Home</Nav.Link> {/* Use onClick event to scroll to top */}
                  <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8">Location</Nav.Link>
                  <Nav.Link onClick={scrollToContact}>Contact Us</Nav.Link> {/* Use onClick event to scroll to Contact */}
                </Nav>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> {/* New Route */}
        </Routes>
        <Element name="contact" /> {/* Add Element component with the name "contact" */}
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Bhariheading />
      <br></br>
      <Clinic />
      {/* <Video></Video> */}
      <ChatBot />
      <Tagline />
      <Advanced />
      <br></br>
      <br></br>
      <ImageGallery />
      <H />
      <Services />
      <Map />
      <BasicExample />
      <Contact />
      <br></br>
    </div>
  );
}

export default App;
