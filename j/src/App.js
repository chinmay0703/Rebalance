import React ,{useState,useEffect}from 'react';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import {Element, scroller, animateScroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Services from './components/Services';
import DropdawnQuestions from './components/DropdawnQuestions';
import Advanced from './components/Advanced';
import Clinic from './components/Clinic';
import Contact from './components/Contact';
import Bhariheading from './components/Bhariheading';
import Tagline from './components/Tagline';
import ImageGallery from './components/ImageGallery';
import Map from './components/Map';
import ChatBot from './components/ChatBox';
import Aboutus from './components/Aboutus';
// import Review from './components/Review';



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
        <Navbar className="navbar-with-shadow" bg="light" expand="lg">
          <Container className='ret'>
            <Navbar.Brand as={Link} to="/" onClick={handleHomeClick}>Rebalance</Navbar.Brand>
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
                <Nav.Link as={Link} to="/" onClick={handleHomeClick}><b>Home</b></Nav.Link>
                <Nav.Link href="https://www.google.com/maps/dir/rebalance+physiotherapy+clinic+bangalore/18.5118881,73.7830858/@13.2024688,77.3054778,10.08z/data=!4m9!4m8!1m5!1m1!1s0x3bae1325625e49d9:0xf06ea16d5911cc6d!2m2!1d77.7171932!2d12.9646641!1m1!4e1?entry=ttu"><b>Location</b></Nav.Link>
                <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link>
                <Nav.Link as={Link} to="/aboutus" onClick={scrollToTop}><b>About</b></Nav.Link>
                <Nav.Link as={Link} onClick={scrollToTop} to="/gallery"><b>Gallery</b></Nav.Link>
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
                  <Nav.Link href="https://www.google.com/maps/dir/rebalance+physiotherapy+clinic+bangalore/18.5118881,73.7830858/@13.2024688,77.3054778,10.08z/data=!4m9!4m8!1m5!1m1!1s0x3bae1325625e49d9:0xf06ea16d5911cc6d!2m2!1d77.7171932!2d12.9646641!1m1!4e1?entry=ttu"><b>Location</b></Nav.Link>
                  <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link> {/* Use onClick event to scroll to Contact */}
                  <Nav.Link as={Link} to="/aboutus" onClick={scrollToTop}><b>About</b></Nav.Link>
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
                  <Nav.Link href="https://www.google.com/maps/dir/rebalance+physiotherapy+clinic+bangalore/18.5118881,73.7830858/@13.2024688,77.3054778,10.08z/data=!4m9!4m8!1m5!1m1!1s0x3bae1325625e49d9:0xf06ea16d5911cc6d!2m2!1d77.7171932!2d12.9646641!1m1!4e1?entry=ttu"><b>Location</b></Nav.Link>
                  <Nav.Link onClick={scrollToContact}><b>Contact Us</b></Nav.Link> {/* Use onClick event to scroll to Contact */}
                  <Nav.Link  onClick={scrollToTop}  as={Link} to="/gallery"><b>Gallery</b></Nav.Link>
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

