import React from 'react'
import Clinic from './Clinic';
import ImageGallery from './ImageGallery';
import Map from './Map';
import Contact from './Contact';
import ChatBot from './ChatBox';
import Nav from 'react-bootstrap/Nav';
import pic from './images/photw.jpg';
import {scroller, animateScroll } from 'react-scroll';
function Gallery() {
    
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
                            <button class="navbar-toggler" style={{ border: "none" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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


export default Gallery