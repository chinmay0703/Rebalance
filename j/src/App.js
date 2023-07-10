import React from 'react';
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
import './App.css'
import ChatBot from './components/ChatBox';
import H from './components/H';
// import Video from './components/Video';
function App() {
  return (
       <div > 
           <header className='sticky-header'>   
            <Navbar className="navbar-with-shadow" bg="light" expand="lg">
      <Container className='ret'>
        <Navbar.Brand href="/home">ReBalance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8">location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <Bhariheading></Bhariheading>
    <br></br>
    <Clinic></Clinic>
    {/* <Video></Video> */}
    <ChatBot></ChatBot>
   
    <Tagline></Tagline>
    <Advanced></Advanced>
    <br></br>
    <br></br>
    <ImageGallery></ImageGallery>
    <BasicExample></BasicExample>
    <H></H>
   <Services></Services> 
  <Map></Map>
   <Contact></Contact>
   
     <br></br>
     </div>
    
  
  );
  }
export default App;
